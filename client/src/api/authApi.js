// client/src/api/authApi.js
// API client cho Authentication endpoints
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Tạo axios instance với config
const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

// Request interceptor: Tự động thêm token vào header
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor: Xử lý refresh token khi access token hết hạn
axiosClient.interceptors.response.use(
    (response) => response.data, // Trả về data trực tiếp
    async (error) => {
        const originalRequest = error.config;

        // Nếu 401 và chưa retry
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {
                    throw new Error('No refresh token');
                }

                // Gọi API refresh token
                const response = await axios.post(
                    `${API_URL}/auth/refresh-token`,
                    {
                        refreshToken
                    }
                );

                const { accessToken } = response.data.data;
                localStorage.setItem('accessToken', accessToken);

                // Retry request ban đầu với token mới
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return axiosClient(originalRequest);
            } catch (refreshError) {
                // Refresh token cũng fail -> logout
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// ===== AUTH API METHODS =====

export const authApi = {
    /**
     * Đăng ký tài khoản mới
     * @param {Object} data - { email, password, confirmPassword, fullName, phone?, role? }
     * @returns {Promise} { user, accessToken, refreshToken }
     */
    register: async (data) => {
        return await axiosClient.post('/auth/register', data);
    },

    /**
     * Đăng nhập
     * @param {Object} credentials - { email, password }
     * @returns {Promise} { user, accessToken, refreshToken }
     */
    login: async (credentials) => {
        return await axiosClient.post('/auth/login', credentials);
    },

    /**
     * Đăng xuất
     * @returns {Promise}
     */
    logout: async () => {
        return await axiosClient.post('/auth/logout');
    },

    /**
     * Quên mật khẩu
     * @param {string} email - Email user
     * @returns {Promise}
     */
    forgotPassword: async (email) => {
        return await axiosClient.post('/auth/forgot-password', { email });
    },

    /**
     * Reset mật khẩu với token
     * @param {Object} data - { token, newPassword, confirmPassword }
     * @returns {Promise}
     */
    resetPassword: async (data) => {
        return await axiosClient.post('/auth/reset-password', data);
    },

    /**
     * Đổi mật khẩu (đã đăng nhập)
     * @param {Object} data - { currentPassword, newPassword, confirmPassword }
     * @returns {Promise}
     */
    changePassword: async (data) => {
        return await axiosClient.post('/auth/change-password', data);
    },

    /**
     * Làm mới access token
     * @param {string} refreshToken - Refresh token
     * @returns {Promise} { accessToken, user }
     */
    refreshToken: async (refreshToken) => {
        return await axiosClient.post('/auth/refresh-token', { refreshToken });
    },

    /**
     * Lấy thông tin user hiện tại
     * @returns {Promise} { user }
     */
    getCurrentUser: async () => {
        return await axiosClient.get('/auth/me');
    },

    /**
     * Verify token
     * @returns {Promise} { valid, user }
     */
    verifyToken: async () => {
        return await axiosClient.post('/auth/verify-token');
    }
};

export default axiosClient;
