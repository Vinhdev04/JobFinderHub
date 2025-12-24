// client/src/components/forms/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import useAuth from '@features/auth/hooks/useAuth.js';
import GithubLoginButton from '@features/auth/components/GithubLoginButton.jsx';
import GoogleLoginButton from '@features/auth/components/GoogleLoginButton.jsx';
import './LoginForm.css';

function LoginForm({
    onClose,
    onSwitchToRegister,
    onSwitchToForgotPassword,
    onSuccess
}) {
    const navigate = useNavigate();
    const { login, error, clearError } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Clear error khi user bắt đầu nhập
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

        // Validate email
        if (!formData.email.trim()) {
            errors.email = 'Email không được để trống';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Email không hợp lệ';
        }

        // Validate password
        if (!formData.password) {
            errors.password = 'Mật khẩu không được để trống';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e?.preventDefault?.();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await login({
                email: formData.email.toLowerCase().trim(),
                password: formData.password
            });

            // Đăng nhập thành công
            console.log('✅ Login successful!');

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
            console.error('❌ Login failed:', error.message);
            // Error đã được set trong AuthContext
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-form__header'>
                <h2 className='login-form__title'>Người tìm việc</h2>

                <div className='login-form__tabs'>
                    <button
                        type='button'
                        className='login-form__tab login-form__tab--active'
                    >
                        Đăng nhập
                    </button>
                    <span className='login-form__tab-divider'>hoặc</span>
                    <button
                        type='button'
                        className='login-form__tab'
                        onClick={onSwitchToRegister}
                    >
                        Đăng ký
                    </button>
                </div>
            </div>

            <div className='login-form__body'>
                {/* Global Error Message */}
                {error && (
                    <div className='login-form__error-alert'>
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                {/* Email Input */}
                <div className='login-form__input-group'>
                    <input
                        type='email'
                        name='email'
                        className={`login-form__input ${
                            validationErrors.email
                                ? 'login-form__input--error'
                                : ''
                        }`}
                        placeholder='Nhập email của bạn'
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={loading}
                        autoComplete='email'
                    />
                    {validationErrors.email && (
                        <span className='login-form__error-text'>
                            {validationErrors.email}
                        </span>
                    )}
                </div>

                {/* Password Input */}
                <div className='login-form__input-group'>
                    <div className='login-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            className={`login-form__input ${
                                validationErrors.password
                                    ? 'login-form__input--error'
                                    : ''
                            }`}
                            placeholder='Mật khẩu'
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={loading}
                            autoComplete='current-password'
                        />
                        <button
                            type='button'
                            className='login-form__toggle-btn'
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={
                                showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                            }
                            disabled={loading}
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                    {validationErrors.password && (
                        <span className='login-form__error-text'>
                            {validationErrors.password}
                        </span>
                    )}
                </div>

                {/* Forgot Password Link */}
                {onSwitchToForgotPassword && (
                    <div className='login-form__forgot-password'>
                        <button
                            type='button'
                            className='login-form__link'
                            onClick={onSwitchToForgotPassword}
                            disabled={loading}
                        >
                            Quên mật khẩu?
                        </button>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type='submit'
                    className='login-form__submit-btn'
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2
                                className='login-form__spinner'
                                size={20}
                                style={{ animation: 'spin 1s linear infinite' }}
                            />
                            <span>Đang đăng nhập...</span>
                        </>
                    ) : (
                        'Đăng nhập'
                    )}
                </button>

                {/* Divider */}
                <div className='login-form__divider'>
                    <span>Hoặc</span>
                </div>

                {/* OAuth Buttons */}
                <GoogleLoginButton disabled={loading} onSuccess={onSuccess} />
                <GithubLoginButton disabled={loading} onSuccess={onSuccess} />
            </div>

            <div className='login-form__footer'>
                <p className='login-form__terms'>
                    Bằng việc đăng nhập, tôi đồng ý chia sẻ thông tin cá nhân
                    của mình theo{' '}
                    <a
                        href='/terms'
                        className='login-form__link'
                        target='_blank'
                    >
                        Điều khoản sử dụng
                    </a>{' '}
                    và{' '}
                    <a
                        href='/privacy'
                        className='login-form__link'
                        target='_blank'
                    >
                        Chính sách bảo mật
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
