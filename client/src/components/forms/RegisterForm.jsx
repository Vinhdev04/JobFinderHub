// client/src/components/forms/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import useAuth from '@features/auth/hooks/useAuth.js';
import GoogleLoginButton from '@features/auth/components/GoogleLoginButton';
import GithubLoginButton from '@features/auth/components/GithubLoginButton';
import './RegisterForm.css';

function RegisterForm({ onClose, onSwitchToLogin, onSuccess }) {
    const navigate = useNavigate();
    const { register, error, clearError } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'STUDENT'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error khi user nhập
        if (validationErrors[name]) {
            setValidationErrors((prev) => ({
                ...prev,
                [name]: null
            }));
        }
        if (error) clearError();
    };

    const validateForm = () => {
        const errors = {};

        // Validate fullName
        if (!formData.fullName.trim()) {
            errors.fullName = 'Họ tên không được để trống';
        } else if (formData.fullName.trim().length < 3) {
            errors.fullName = 'Họ tên phải có ít nhất 3 ký tự';
        }

        // Validate email
        if (!formData.email.trim()) {
            errors.email = 'Email không được để trống';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Email không hợp lệ';
        }

        // Validate phone (optional)
        if (
            formData.phone &&
            !/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(formData.phone)
        ) {
            errors.phone = 'Số điện thoại không hợp lệ (VD: 0912345678)';
        }

        // Validate password
        if (!formData.password) {
            errors.password = 'Mật khẩu không được để trống';
        } else if (formData.password.length < 8) {
            errors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(
                formData.password
            )
        ) {
            errors.password =
                'Mật khẩu phải chứa: chữ hoa, chữ thường, số và ký tự đặc biệt';
        }

        // Validate confirmPassword
        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const getPasswordStrength = () => {
        const pwd = formData.password;
        if (!pwd) return null;

        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (/[a-z]/.test(pwd)) strength++;
        if (/[A-Z]/.test(pwd)) strength++;
        if (/\d/.test(pwd)) strength++;
        if (/[@$!%*?&]/.test(pwd)) strength++;

        if (strength <= 2) return { label: 'Yếu', color: '#ef4444' };
        if (strength <= 3) return { label: 'Trung bình', color: '#f59e0b' };
        if (strength <= 4) return { label: 'Mạnh', color: '#10b981' };
        return { label: 'Rất mạnh', color: '#06b6d4' };
    };

    const passwordStrength = getPasswordStrength();

    const handleSubmit = async (e) => {
        e?.preventDefault?.();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await register({
                email: formData.email.toLowerCase().trim(),
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                fullName: formData.fullName.trim(),
                phone: formData.phone.trim() || undefined,
                role: formData.role
            });

            // Đăng ký thành công
            console.log('✅ Register successful!');

            // Đóng modal nếu có
            if (onClose) onClose();

            // Gọi callback onSuccess (thường để reload page)
            if (onSuccess) {
                onSuccess();
            } else {
                // Fallback: Reload page để cập nhật navbar
                window.location.reload();
            }
        } catch (error) {
            console.error('❌ Register failed:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='register-form'>
            <div className='register-form__header'>
                <h2 className='register-form__title'>Người tìm việc</h2>

                <div className='register-form__tabs'>
                    <button
                        type='button'
                        className='register-form__tab'
                        onClick={onSwitchToLogin}
                        disabled={loading}
                    >
                        Đăng nhập
                    </button>
                    <span className='register-form__tab-divider'>hoặc</span>
                    <button
                        type='button'
                        className='register-form__tab register-form__tab--active'
                    >
                        Đăng ký
                    </button>
                </div>
            </div>

            <div className='register-form__body'>
                {/* Global Error */}
                {error && (
                    <div className='register-form__error-alert'>
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                {/* Full Name */}
                <div className='register-form__input-group'>
                    <input
                        type='text'
                        name='fullName'
                        className={`register-form__input ${
                            validationErrors.fullName
                                ? 'register-form__input--error'
                                : ''
                        }`}
                        placeholder='Họ và tên'
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={loading}
                        autoComplete='name'
                    />
                    {validationErrors.fullName && (
                        <span className='register-form__error-text'>
                            {validationErrors.fullName}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className='register-form__input-group'>
                    <input
                        type='email'
                        name='email'
                        className={`register-form__input ${
                            validationErrors.email
                                ? 'register-form__input--error'
                                : ''
                        }`}
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={loading}
                        autoComplete='email'
                    />
                    {validationErrors.email && (
                        <span className='register-form__error-text'>
                            {validationErrors.email}
                        </span>
                    )}
                </div>

                {/* Phone */}
                <div className='register-form__input-group'>
                    <input
                        type='tel'
                        name='phone'
                        className={`register-form__input ${
                            validationErrors.phone
                                ? 'register-form__input--error'
                                : ''
                        }`}
                        placeholder='Số điện thoại (không bắt buộc)'
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={loading}
                        autoComplete='tel'
                    />
                    {validationErrors.phone && (
                        <span className='register-form__error-text'>
                            {validationErrors.phone}
                        </span>
                    )}
                </div>

                {/* Password */}
                <div className='register-form__input-group'>
                    <div className='register-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            className={`register-form__input ${
                                validationErrors.password
                                    ? 'register-form__input--error'
                                    : ''
                            }`}
                            placeholder='Mật khẩu'
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={loading}
                            autoComplete='new-password'
                        />
                        <button
                            type='button'
                            className='register-form__toggle-btn'
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={loading}
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {formData.password && passwordStrength && (
                        <div className='register-form__password-strength'>
                            <div className='register-form__strength-bar'>
                                <div
                                    className='register-form__strength-fill'
                                    style={{
                                        width: `${
                                            passwordStrength.label === 'Yếu'
                                                ? 25
                                                : passwordStrength.label ===
                                                  'Trung bình'
                                                ? 50
                                                : passwordStrength.label ===
                                                  'Mạnh'
                                                ? 75
                                                : 100
                                        }%`,
                                        backgroundColor: passwordStrength.color
                                    }}
                                />
                            </div>
                            <span
                                style={{
                                    color: passwordStrength.color,
                                    fontSize: '12px'
                                }}
                            >
                                {passwordStrength.label}
                            </span>
                        </div>
                    )}

                    {validationErrors.password && (
                        <span className='register-form__error-text'>
                            {validationErrors.password}
                        </span>
                    )}
                </div>

                {/* Confirm Password */}
                <div className='register-form__input-group'>
                    <div className='register-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            className={`register-form__input ${
                                validationErrors.confirmPassword
                                    ? 'register-form__input--error'
                                    : ''
                            }`}
                            placeholder='Xác nhận mật khẩu'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            disabled={loading}
                            autoComplete='new-password'
                        />
                        {formData.confirmPassword &&
                            formData.password === formData.confirmPassword && (
                                <CheckCircle2
                                    size={20}
                                    className='register-form__check-icon'
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        color: '#10b981'
                                    }}
                                />
                            )}
                    </div>
                    {validationErrors.confirmPassword && (
                        <span className='register-form__error-text'>
                            {validationErrors.confirmPassword}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className='register-form__submit-btn'
                    type='button'
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2
                                className='register-form__spinner'
                                size={20}
                                style={{ animation: 'spin 1s linear infinite' }}
                            />
                            <span>Đang xử lý...</span>
                        </>
                    ) : (
                        'Tiếp tục'
                    )}
                </button>

                {/* Divider */}
                <div className='register-form__divider'>
                    <span>Hoặc</span>
                </div>

                {/* Social Login */}
                <GoogleLoginButton disabled={loading} onSuccess={onSuccess} />
                <GithubLoginButton disabled={loading} onSuccess={onSuccess} />
            </div>

            <div className='register-form__footer'>
                <p className='register-form__terms'>
                    Bằng việc đăng ký, tôi đồng ý chia sẻ thông tin cá nhân của
                    mình với nhà tuyển dụng theo các{' '}
                    <a
                        href='/terms'
                        className='register-form__link'
                        target='_blank'
                    >
                        Điều khoản sử dụng
                    </a>
                    ,{' '}
                    <a
                        href='/privacy'
                        className='register-form__link'
                        target='_blank'
                    >
                        Chính sách bảo mật
                    </a>{' '}
                    và{' '}
                    <a
                        href='/data-policy'
                        className='register-form__link'
                        target='_blank'
                    >
                        Chính sách dữ liệu cá nhân
                    </a>{' '}
                    của JobFinderHub
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;
