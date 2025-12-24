// server/middleware/authMiddleware.js
// Middleware xác thực JWT token và gắn user vào req.user
import jwtService from '../services/jwtServices.js';
import prisma from '../lib/prisma.lib.js';

/**
 * Middleware: Verify JWT token và attach user vào request
 */
const authMiddleware = async (req, res, next) => {
    try {
        // 1. Lấy token từ header
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                error: {
                    message: 'Không tìm thấy token xác thực',
                    code: 'NO_TOKEN'
                }
            });
        }

        const token = authHeader.replace('Bearer ', '');

        // 2. Verify token
        let decoded;
        try {
            decoded = jwtService.verifyAccessToken(token);
        } catch (error) {
            return res.status(401).json({
                success: false,
                error: {
                    message: error.message,
                    code:
                        error.message === 'Token expired'
                            ? 'TOKEN_EXPIRED'
                            : 'INVALID_TOKEN'
                }
            });
        }

        // 3. Lấy user từ database
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                phone: true,
                avatar: true,
                role: true,
                isActive: true
            }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: {
                    message: 'Người dùng không tồn tại',
                    code: 'USER_NOT_FOUND'
                }
            });
        }

        // 4. Kiểm tra tài khoản có active không
        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                error: {
                    message: 'Tài khoản đã bị vô hiệu hóa',
                    code: 'ACCOUNT_DEACTIVATED'
                }
            });
        }

        // 5. Attach user vào request
        req.user = user;

        // 6. Ghi log IP và User Agent (optional)
        req.clientIp = req.ip || req.connection.remoteAddress;
        req.userAgent = req.get('User-Agent');

        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error);
        res.status(500).json({
            success: false,
            error: {
                message: 'Lỗi xác thực',
                code: 'AUTH_ERROR'
            }
        });
    }
};

/**
 * Middleware: Optional authentication (không bắt buộc token)
 * Dùng cho các route công khai nhưng muốn biết user đã login chưa
 */
export const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            req.user = null;
            return next();
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            const decoded = jwtService.verifyAccessToken(token);
            const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    role: true,
                    isActive: true
                }
            });

            req.user = user && user.isActive ? user : null;
        } catch (error) {
            req.user = null;
        }

        next();
    } catch (error) {
        req.user = null;
        next();
    }
};

export default authMiddleware;
