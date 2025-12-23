import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// @route   POST /auth/register
// @desc    Register new user
// @access  Public
const register = async (req, res) => {
    try {
        const { email, password, fullName, role, phone } = req.body;

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: { message: 'Email already registered' }
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                fullName,
                role: role || 'STUDENT',
                phone
            },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true
            }
        });

        // Create profile based on role
        if ((role || 'STUDENT') === 'STUDENT') {
            await prisma.studentProfile.create({
                data: { userId: user.id }
            });
        }

        // Generate token
        const token = generateToken(user.id);

        res.status(201).json({
            success: true,
            data: { user, token },
            message: 'User registered successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: { message: error.message }
        });
    }
};

// @route   POST /auth/login
// @desc    Login user
// @access  Public
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: { message: 'Invalid credentials' }
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                error: { message: 'Invalid credentials' }
            });
        }

        // Check if active
        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                error: { message: 'Account is deactivated' }
            });
        }

        // Update last login
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });

        // Generate token
        const token = generateToken(user.id);

        res.json({
            success: true,
            data: {
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.fullName,
                    role: user.role
                },
                token
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: { message: error.message }
        });
    }
};

// @route   POST /auth/logout
// @desc    Logout user
// @access  Private (token handled client-side)
const logout = async (req, res) => {
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
};

export { register, login, logout };
