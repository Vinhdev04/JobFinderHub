// server/services/jwtService.js
// Quản lý JWT Access Token & Refresh Token
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.lib.js';

class JwtService {
    /**
     * Tạo Access Token (Short-lived: 7 days)
     * @param {string} userId - User ID
     * @param {string} role - User role
     * @returns {string} JWT Token
     */
    generateAccessToken(userId, role) {
        return jwt.sign(
            {
                userId,
                role,
                type: 'access'
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRE || '7d',
                issuer: 'JobFinderHub',
                audience: 'JobFinderHub-Users'
            }
        );
    }

    /**
     * Tạo Refresh Token (Long-lived: 30 days)
     * @param {string} userId - User ID
     * @returns {string} Refresh Token
     */
    generateRefreshToken(userId) {
        return jwt.sign(
            {
                userId,
                type: 'refresh'
            },
            process.env.JWT_REFRESH_SECRET,
            {
                expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d',
                issuer: 'JobFinderHub',
                audience: 'JobFinderHub-Refresh'
            }
        );
    }

    /**
     * Tạo cả 2 tokens cùng lúc
     * @param {string} userId - User ID
     * @param {string} role - User role
     * @returns {Object} { accessToken, refreshToken }
     */
    generateTokenPair(userId, role) {
        return {
            accessToken: this.generateAccessToken(userId, role),
            refreshToken: this.generateRefreshToken(userId)
        };
    }

    /**
     * Verify Access Token
     * @param {string} token - JWT Token
     * @returns {Object} Decoded payload
     * @throws {Error} If token invalid
     */
    verifyAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET, {
                issuer: 'JobFinderHub',
                audience: 'JobFinderHub-Users'
            });
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new Error('Token expired');
            }
            if (error.name === 'JsonWebTokenError') {
                throw new Error('Invalid token');
            }
            throw error;
        }
    }

    /**
     * Verify Refresh Token
     * @param {string} token - Refresh Token
     * @returns {Object} Decoded payload
     */
    verifyRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET, {
                issuer: 'JobFinderHub',
                audience: 'JobFinderHub-Refresh'
            });
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new Error('Refresh token expired');
            }
            throw new Error('Invalid refresh token');
        }
    }

    /**
     * Tạo Password Reset Token (Short-lived: 1 hour)
     * @param {string} userId - User ID
     * @returns {string} Reset Token
     */
    generatePasswordResetToken(userId) {
        return jwt.sign(
            {
                userId,
                type: 'password_reset'
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
                issuer: 'JobFinderHub'
            }
        );
    }

    /**
     * Verify Password Reset Token
     * @param {string} token - Reset Token
     * @returns {Object} Decoded payload
     */
    verifyPasswordResetToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET, {
                issuer: 'JobFinderHub'
            });

            if (decoded.type !== 'password_reset') {
                throw new Error('Invalid token type');
            }

            return decoded;
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new Error(
                    'Reset link expired. Please request a new one.'
                );
            }
            throw new Error('Invalid reset token');
        }
    }

    /**
     * Refresh Access Token bằng Refresh Token
     * @param {string} refreshToken - Refresh Token
     * @returns {Object} { accessToken, user }
     */
    async refreshAccessToken(refreshToken) {
        // Verify refresh token
        const decoded = this.verifyRefreshToken(refreshToken);

        // Get user from database
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

        if (!user) {
            throw new Error('User not found');
        }

        if (!user.isActive) {
            throw new Error('Account is deactivated');
        }

        // Generate new access token
        const accessToken = this.generateAccessToken(user.id, user.role);

        return {
            accessToken,
            user
        };
    }

    /**
     * Decode token without verification (for debugging)
     * @param {string} token - JWT Token
     * @returns {Object} Decoded payload
     */
    decodeToken(token) {
        return jwt.decode(token);
    }
}

export default new JwtService();
