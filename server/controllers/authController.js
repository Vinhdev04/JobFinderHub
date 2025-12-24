// server/controllers/authController.js
// Controller xử lý tất cả Authentication endpoints
import authService from '../services/authService.js';

/**
 * @route   POST /api/v1/auth/register
 * @desc    Đăng ký tài khoản mới
 * @access  Public
 */
export const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);

        res.status(201).json({
            success: true,
            data: result,
            message: 'Đăng ký thành công'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/login
 * @desc    Đăng nhập
 * @access  Public
 */
export const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);

        res.json({
            success: true,
            data: result,
            message: 'Đăng nhập thành công'
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Đăng xuất (Client xóa token)
 * @access  Private
 */
export const logout = async (req, res) => {
    // Token được xóa ở client-side
    // Có thể implement blacklist token nếu cần
    res.json({
        success: true,
        message: 'Đăng xuất thành công'
    });
};

/**
 * @route   POST /api/v1/auth/forgot-password
 * @desc    Gửi email reset password
 * @access  Public
 */
export const forgotPassword = async (req, res) => {
    try {
        const result = await authService.forgotPassword(req.body.email);

        res.json({
            success: true,
            data: result,
            message: result.message
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/reset-password
 * @desc    Reset mật khẩu với token từ email
 * @access  Public
 */
export const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const result = await authService.resetPassword(token, newPassword);

        res.json({
            success: true,
            data: result,
            message: result.message
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/change-password
 * @desc    Đổi mật khẩu (đã đăng nhập)
 * @access  Private
 */
export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const result = await authService.changePassword(
            req.user.id,
            currentPassword,
            newPassword
        );

        res.json({
            success: true,
            data: result,
            message: result.message
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/refresh-token
 * @desc    Làm mới access token bằng refresh token
 * @access  Public
 */
export const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        const result = await authService.refreshToken(refreshToken);

        res.json({
            success: true,
            data: result,
            message: 'Token đã được làm mới'
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   GET /api/v1/auth/me
 * @desc    Lấy thông tin user hiện tại
 * @access  Private
 */
export const getCurrentUser = async (req, res) => {
    try {
        const user = await authService.getCurrentUser(req.user.id);

        res.json({
            success: true,
            data: { user }
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: { message: error.message }
        });
    }
};

/**
 * @route   POST /api/v1/auth/verify-token
 * @desc    Verify JWT token (dùng cho middleware hoặc client check)
 * @access  Private
 */
export const verifyToken = async (req, res) => {
    // Nếu đến được đây nghĩa là token hợp lệ (đã qua authMiddleware)
    res.json({
        success: true,
        data: {
            valid: true,
            user: req.user
        },
        message: 'Token hợp lệ'
    });
};
