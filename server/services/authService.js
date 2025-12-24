// server/services/authService.js
// Business Logic cho Authentication: Register, Login, Forgot Password, Reset Password
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma.lib.js';
import jwtService from './jwtServices.js';
import emailService from './emailService.js';
import auditLogService from './auditLogService.js';

class AuthService {
    /**
     * Đăng ký tài khoản mới
     * @param {Object} data - { email, password, fullName, role, phone }
     * @returns {Object} { user, tokens }
     */
    async register(data) {
        const { email, password, fullName, role = 'STUDENT', phone } = data;

        // 1. Kiểm tra email đã tồn tại
        const existingUser = await prisma.user.findUnique({
            where: { email: email.toLowerCase() }
        });

        if (existingUser) {
            throw new Error('Email đã được đăng ký');
        }

        // 2. Validate role (chỉ cho phép đăng ký STUDENT và RECRUITER)
        const allowedRoles = ['STUDENT', 'RECRUITER'];
        if (!allowedRoles.includes(role)) {
            throw new Error(
                'Vai trò không hợp lệ. Chỉ hỗ trợ đăng ký Sinh viên hoặc Nhà tuyển dụng.'
            );
        }

        // 3. Hash password
        const passwordHash = await bcrypt.hash(password, 12);

        // 4. Tạo user trong database (Transaction)
        const user = await prisma.$transaction(async (tx) => {
            // Tạo user
            const newUser = await tx.user.create({
                data: {
                    email: email.toLowerCase(),
                    passwordHash,
                    fullName,
                    phone,
                    role
                },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    phone: true,
                    role: true,
                    avatar: true,
                    createdAt: true
                }
            });

            // Tạo profile tương ứng với role
            if (role === 'STUDENT') {
                await tx.studentProfile.create({
                    data: {
                        userId: newUser.id,
                        skills: []
                    }
                });
            }

            return newUser;
        });

        // 5. Generate tokens
        const tokens = jwtService.generateTokenPair(user.id, user.role);

        // 6. Gửi email chào mừng (Non-blocking)
        emailService
            .sendWelcomeEmail(user)
            .catch((err) =>
                console.error('Failed to send welcome email:', err)
            );

        // 7. Log action
        await auditLogService.log({
            actorId: user.id,
            actionType: 'USER_REGISTERED',
            targetTable: 'users',
            targetId: user.id,
            newValue: { email: user.email, role: user.role }
        });

        return { user, ...tokens };
    }

    /**
     * Đăng nhập
     * @param {Object} credentials - { email, password }
     * @returns {Object} { user, tokens }
     */
    async login(credentials) {
        const { email, password } = credentials;

        // 1. Tìm user (bao gồm cả password hash)
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
            select: {
                id: true,
                email: true,
                passwordHash: true,
                fullName: true,
                phone: true,
                role: true,
                avatar: true,
                isActive: true,
                googleId: true,
                githubId: true
            }
        });

        if (!user) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        // 2. Kiểm tra tài khoản OAuth (không có password)
        if (!user.passwordHash && (user.googleId || user.githubId)) {
            throw new Error(
                'Tài khoản này đăng ký qua Google/Github. Vui lòng đăng nhập bằng OAuth.'
            );
        }

        // 3. Verify password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.passwordHash
        );
        if (!isPasswordValid) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        // 4. Kiểm tra tài khoản có bị khóa
        if (!user.isActive) {
            throw new Error(
                'Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.'
            );
        }

        // 5. Cập nhật lastLoginAt
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });

        // 6. Generate tokens
        const tokens = jwtService.generateTokenPair(user.id, user.role);

        // 7. Remove sensitive data
        const { passwordHash, ...userWithoutPassword } = user;

        // 8. Log action
        await auditLogService.log({
            actorId: user.id,
            actionType: 'USER_LOGIN',
            targetTable: 'users',
            targetId: user.id
        });

        return {
            user: userWithoutPassword,
            ...tokens
        };
    }

    /**
     * Quên mật khẩu - Gửi email reset link
     * @param {string} email - Email user
     * @returns {Object} { message }
     */
    async forgotPassword(email) {
        // 1. Tìm user
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
            select: {
                id: true,
                email: true,
                fullName: true,
                googleId: true,
                githubId: true,
                isActive: true
            }
        });

        // Security: Không tiết lộ email có tồn tại hay không
        if (!user) {
            return {
                message: 'Nếu email tồn tại, link đặt lại mật khẩu đã được gửi.'
            };
        }

        // 2. Kiểm tra tài khoản OAuth
        if (!user.passwordHash && (user.googleId || user.githubId)) {
            throw new Error(
                'Tài khoản OAuth không thể đặt lại mật khẩu. Vui lòng đăng nhập bằng Google/Github.'
            );
        }

        // 3. Kiểm tra tài khoản active
        if (!user.isActive) {
            throw new Error('Tài khoản đã bị vô hiệu hóa.');
        }

        // 4. Generate reset token (expires in 1 hour)
        const resetToken = jwtService.generatePasswordResetToken(user.id);

        // 5. Gửi email reset password
        await emailService.sendPasswordResetEmail(user, resetToken);

        // 6. Log action
        await auditLogService.log({
            actorId: user.id,
            actionType: 'PASSWORD_RESET_REQUESTED',
            targetTable: 'users',
            targetId: user.id
        });

        return {
            message: 'Link đặt lại mật khẩu đã được gửi đến email của bạn.'
        };
    }

    /**
     * Reset mật khẩu với token
     * @param {string} token - Reset token từ email
     * @param {string} newPassword - Mật khẩu mới
     * @returns {Object} { message }
     */
    async resetPassword(token, newPassword) {
        // 1. Verify reset token
        let decoded;
        try {
            decoded = jwtService.verifyPasswordResetToken(token);
        } catch (error) {
            throw new Error(
                'Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.'
            );
        }

        // 2. Tìm user
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                isActive: true
            }
        });

        if (!user) {
            throw new Error('Người dùng không tồn tại.');
        }

        if (!user.isActive) {
            throw new Error('Tài khoản đã bị vô hiệu hóa.');
        }

        // 3. Hash mật khẩu mới
        const passwordHash = await bcrypt.hash(newPassword, 12);

        // 4. Cập nhật password
        await prisma.user.update({
            where: { id: user.id },
            data: { passwordHash }
        });

        // 5. Gửi email xác nhận
        emailService
            .sendPasswordChangedEmail(user)
            .catch((err) =>
                console.error('Failed to send password changed email:', err)
            );

        // 6. Log action
        await auditLogService.log({
            actorId: user.id,
            actionType: 'PASSWORD_RESET_COMPLETED',
            targetTable: 'users',
            targetId: user.id
        });

        return {
            message:
                'Mật khẩu đã được đặt lại thành công. Vui lòng đăng nhập lại.'
        };
    }

    /**
     * Đổi mật khẩu (khi đã đăng nhập)
     * @param {string} userId - User ID
     * @param {string} currentPassword - Mật khẩu hiện tại
     * @param {string} newPassword - Mật khẩu mới
     * @returns {Object} { message }
     */
    async changePassword(userId, currentPassword, newPassword) {
        // 1. Tìm user
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                passwordHash: true
            }
        });

        if (!user) {
            throw new Error('Người dùng không tồn tại.');
        }

        // 2. Verify current password
        const isPasswordValid = await bcrypt.compare(
            currentPassword,
            user.passwordHash
        );
        if (!isPasswordValid) {
            throw new Error('Mật khẩu hiện tại không đúng.');
        }

        // 3. Check new password không giống cũ
        const isSamePassword = await bcrypt.compare(
            newPassword,
            user.passwordHash
        );
        if (isSamePassword) {
            throw new Error('Mật khẩu mới không được giống mật khẩu cũ.');
        }

        // 4. Hash và update
        const passwordHash = await bcrypt.hash(newPassword, 12);
        await prisma.user.update({
            where: { id: userId },
            data: { passwordHash }
        });

        // 5. Gửi email
        emailService
            .sendPasswordChangedEmail(user)
            .catch((err) =>
                console.error('Failed to send password changed email:', err)
            );

        // 6. Log action
        await auditLogService.log({
            actorId: userId,
            actionType: 'PASSWORD_CHANGED',
            targetTable: 'users',
            targetId: userId
        });

        return {
            message: 'Đổi mật khẩu thành công.'
        };
    }

    /**
     * Refresh access token
     * @param {string} refreshToken - Refresh token
     * @returns {Object} { accessToken, user }
     */
    async refreshToken(refreshToken) {
        return await jwtService.refreshAccessToken(refreshToken);
    }

    /**
     * Lấy thông tin user hiện tại (từ token)
     * @param {string} userId - User ID
     * @returns {Object} User info
     */
    async getCurrentUser(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                phone: true,
                avatar: true,
                role: true,
                isActive: true,
                createdAt: true,
                lastLoginAt: true
            }
        });

        if (!user) {
            throw new Error('Người dùng không tồn tại.');
        }

        return user;
    }
}

export default new AuthService();
