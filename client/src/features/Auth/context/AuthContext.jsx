// client/src/contexts/AuthContext.jsx
// Context quản lý trạng thái authentication toàn app
import { createContext, useState, useEffect, useCallback } from 'react';
import { authApi } from '@api/authApi.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Kiểm tra auth khi app load
    useEffect(() => {
        checkAuth();
    }, []);

    /**
     * Kiểm tra user đã đăng nhập chưa (từ token)
     */
    const checkAuth = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                setLoading(false);
                return;
            }

            const response = await authApi.getCurrentUser();
            setUser(response.data.user);
        } catch (error) {
            console.error('Auth check failed:', error);
            // Clear invalid tokens
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Đăng ký tài khoản mới
     * @param {Object} data - { email, password, confirmPassword, fullName, phone?, role? }
     */
    const register = async (data) => {
        try {
            setError(null);
            const response = await authApi.register(data);

            const { user, accessToken, refreshToken } = response.data;

            // Lưu tokens
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            setUser(user);
            return { success: true, user };
        } catch (error) {
            const errorMessage =
                error.response?.data?.error?.message || 'Đăng ký thất bại';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    /**
     * Đăng nhập
     * @param {Object} credentials - { email, password }
     */
    const login = async (credentials) => {
        try {
            setError(null);
            const response = await authApi.login(credentials);

            const { user, accessToken, refreshToken } = response.data;

            // Lưu tokens
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            setUser(user);
            return { success: true, user };
        } catch (error) {
            const errorMessage =
                error.response?.data?.error?.message || 'Đăng nhập thất bại';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    /**
     * Đăng xuất
     */
    const logout = useCallback(async () => {
        try {
            await authApi.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear tokens và user state
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setUser(null);
            setError(null);
        }
    }, []);

    /**
     * Quên mật khẩu
     * @param {string} email - Email user
     */
    const forgotPassword = async (email) => {
        try {
            setError(null);
            const response = await authApi.forgotPassword(email);
            return { success: true, message: response.data.message };
        } catch (error) {
            const errorMessage =
                error.response?.data?.error?.message || 'Gửi email thất bại';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    /**
     * Reset mật khẩu
     * @param {Object} data - { token, newPassword, confirmPassword }
     */
    const resetPassword = async (data) => {
        try {
            setError(null);
            const response = await authApi.resetPassword(data);
            return { success: true, message: response.data.message };
        } catch (error) {
            const errorMessage =
                error.response?.data?.error?.message ||
                'Đặt lại mật khẩu thất bại';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    /**
     * Đổi mật khẩu (đã đăng nhập)
     * @param {Object} data - { currentPassword, newPassword, confirmPassword }
     */
    const changePassword = async (data) => {
        try {
            setError(null);
            const response = await authApi.changePassword(data);
            return { success: true, message: response.data.message };
        } catch (error) {
            const errorMessage =
                error.response?.data?.error?.message || 'Đổi mật khẩu thất bại';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    /**
     * Cập nhật thông tin user
     * @param {Object} updatedUser - User data mới
     */
    const updateUser = useCallback((updatedUser) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...updatedUser
        }));
    }, []);

    /**
     * Clear error
     */
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const value = {
        // State
        user,
        loading,
        error,
        isAuthenticated: !!user,

        // Methods
        register,
        login,
        logout,
        forgotPassword,
        resetPassword,
        changePassword,
        updateUser,
        clearError,
        checkAuth,

        // Helper functions
        hasRole: (role) => user?.role === role,
        hasAnyRole: (...roles) => roles.includes(user?.role),
        isStudent: user?.role === 'STUDENT',
        isRecruiter: user?.role === 'RECRUITER',
        isCompanyManager: user?.role === 'COMPANY_MANAGER',
        isInternManager: user?.role === 'INTERN_MANAGER',
        isSysAdmin: user?.role === 'SYS_ADMIN'
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;