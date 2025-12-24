// server/validators/authValidation.js
// Validation cho Authentication endpoints sử dụng Joi
import Joi from 'joi';

// Password requirements
const passwordSchema = Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .messages({
        'string.min': 'Mật khẩu phải có ít nhất 8 ký tự',
        'string.max': 'Mật khẩu không được quá 128 ký tự',
        'string.pattern.base':
            'Mật khẩu phải chứa ít nhất: 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt (@$!%*?&)'
    });

// Email validation
const emailSchema = Joi.string().email().lowercase().trim().messages({
    'string.email': 'Email không hợp lệ',
    'string.empty': 'Email không được để trống'
});

// Phone validation (Việt Nam format)
const phoneSchema = Joi.string()
    .pattern(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/)
    .messages({
        'string.pattern.base':
            'Số điện thoại không hợp lệ (VD: 0912345678 hoặc +84912345678)'
    });

// ===== VALIDATION SCHEMAS =====

/**
 * Schema cho đăng ký
 */
export const registerSchema = Joi.object({
    email: emailSchema.required(),
    password: passwordSchema.required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Mật khẩu xác nhận không khớp'
        }),
    fullName: Joi.string().min(3).max(100).trim().required().messages({
        'string.min': 'Họ tên phải có ít nhất 3 ký tự',
        'string.max': 'Họ tên không được quá 100 ký tự',
        'string.empty': 'Họ tên không được để trống'
    }),
    phone: phoneSchema.optional().allow(''),
    role: Joi.string()
        .valid('STUDENT', 'RECRUITER')
        .default('STUDENT')
        .messages({
            'any.only':
                'Vai trò không hợp lệ. Chỉ hỗ trợ STUDENT hoặc RECRUITER'
        })
});

/**
 * Schema cho đăng nhập
 */
export const loginSchema = Joi.object({
    email: emailSchema.required(),
    password: Joi.string().required().messages({
        'string.empty': 'Mật khẩu không được để trống'
    })
});

/**
 * Schema cho quên mật khẩu
 */
export const forgotPasswordSchema = Joi.object({
    email: emailSchema.required()
});

/**
 * Schema cho reset mật khẩu
 */
export const resetPasswordSchema = Joi.object({
    token: Joi.string().required().messages({
        'string.empty': 'Token không được để trống'
    }),
    newPassword: passwordSchema.required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref('newPassword'))
        .required()
        .messages({
            'any.only': 'Mật khẩu xác nhận không khớp'
        })
});

/**
 * Schema cho đổi mật khẩu (đã đăng nhập)
 */
export const changePasswordSchema = Joi.object({
    currentPassword: Joi.string().required().messages({
        'string.empty': 'Mật khẩu hiện tại không được để trống'
    }),
    newPassword: passwordSchema.required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref('newPassword'))
        .required()
        .messages({
            'any.only': 'Mật khẩu xác nhận không khớp'
        })
});

/**
 * Schema cho refresh token
 */
export const refreshTokenSchema = Joi.object({
    refreshToken: Joi.string().required().messages({
        'string.empty': 'Refresh token không được để trống'
    })
});

// ===== VALIDATION MIDDLEWARE =====

/**
 * Middleware validate request body
 * @param {Joi.Schema} schema - Joi validation schema
 */
export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false, // Trả về tất cả lỗi, không chỉ lỗi đầu tiên
            stripUnknown: true // Loại bỏ các field không được định nghĩa
        });

        if (error) {
            const errors = error.details.map((detail) => ({
                field: detail.path.join('.'),
                message: detail.message
            }));

            return res.status(400).json({
                success: false,
                error: {
                    message: 'Dữ liệu không hợp lệ',
                    details: errors
                }
            });
        }

        // Gán giá trị đã validate vào req.body
        req.body = value;
        next();
    };
};
