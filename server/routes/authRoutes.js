// server/routes/authRoutes.js
// Định nghĩa tất cả routes cho Authentication với validation middleware
import express from 'express';
import {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    refreshToken,
    getCurrentUser,
    verifyToken
} from '../controllers/authController.js';

import {
    validateRequest,
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    changePasswordSchema,
    refreshTokenSchema
} from '../validators/authValidator.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// ===== PUBLIC ROUTES =====

/**
 * POST /api/v1/auth/register
 * Body: { email, password, confirmPassword, fullName, phone?, role? }
 */
router.post('/register', validateRequest(registerSchema), register);

/**
 * POST /api/v1/auth/login
 * Body: { email, password }
 */
router.post('/login', validateRequest(loginSchema), login);

/**
 * POST /api/v1/auth/forgot-password
 * Body: { email }
 */
router.post(
    '/forgot-password',
    validateRequest(forgotPasswordSchema),
    forgotPassword
);

/**
 * POST /api/v1/auth/reset-password
 * Body: { token, newPassword, confirmPassword }
 */
router.post(
    '/reset-password',
    validateRequest(resetPasswordSchema),
    resetPassword
);

/**
 * POST /api/v1/auth/refresh-token
 * Body: { refreshToken }
 */
router.post(
    '/refresh-token',
    validateRequest(refreshTokenSchema),
    refreshToken
);

// ===== PROTECTED ROUTES (Cần token) =====

/**
 * POST /api/v1/auth/logout
 * Headers: { Authorization: "Bearer <token>" }
 */
router.post('/logout', authMiddleware, logout);

/**
 * GET /api/v1/auth/me
 * Lấy thông tin user hiện tại
 */
router.get('/me', authMiddleware, getCurrentUser);

/**
 * POST /api/v1/auth/verify-token
 * Kiểm tra token còn hợp lệ không
 */
router.post('/verify-token', authMiddleware, verifyToken);

/**
 * POST /api/v1/auth/change-password
 * Body: { currentPassword, newPassword, confirmPassword }
 */
router.post(
    '/change-password',
    authMiddleware,
    validateRequest(changePasswordSchema),
    changePassword
);

// ===== OAUTH ROUTES (Google, Github) =====
// Sẽ implement ở file riêng: oauthRoutes.js

export default router;
