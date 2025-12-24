// ===========================================
// client/src/pages/ResetPasswordPage.jsx
// ===========================================
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './ResetPasswordPage.css';

function ResetPasswordPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const { resetPassword, error, clearError } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (validationErrors[name]) {
            setValidationErrors((prev) => ({ ...prev, [name]: null }));
        }
        if (error) clearError();
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.newPassword) {
            errors.newPassword = 'Mật khẩu không được để trống';
        } else if (formData.newPassword.length < 8) {
            errors.newPassword = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(
                formData.newPassword
            )
        ) {
            errors.newPassword =
                'Mật khẩu phải chứa: chữ hoa, chữ thường, số và ký tự đặc biệt';
        }

        if (formData.newPassword !== formData.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            alert('Link không hợp lệ');
            return;
        }

        if (!validateForm()) return;

        setLoading(true);
        try {
            await resetPassword({
                token,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword
            });
            setSuccess(true);
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            console.error('Reset password failed:', error.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className='reset-password-page'>
                <div className='reset-password-page__success'>
                    <CheckCircle2 size={64} color='#10b981' />
                    <h2>Đặt lại mật khẩu thành công!</h2>
                    <p>Bạn sẽ được chuyển đến trang đăng nhập...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='reset-password-page'>
            <form className='reset-password-form' onSubmit={handleSubmit}>
                <h2>Đặt lại mật khẩu</h2>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                    Nhập mật khẩu mới cho tài khoản của bạn
                </p>

                {error && (
                    <div className='reset-password-form__error-alert'>
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                {/* New Password */}
                <div className='reset-password-form__input-group'>
                    <label>Mật khẩu mới</label>
                    <div className='reset-password-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='newPassword'
                            className={`reset-password-form__input ${
                                validationErrors.newPassword
                                    ? 'reset-password-form__input--error'
                                    : ''
                            }`}
                            placeholder='Nhập mật khẩu mới'
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <button
                            type='button'
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
                    {validationErrors.newPassword && (
                        <span className='reset-password-form__error-text'>
                            {validationErrors.newPassword}
                        </span>
                    )}
                </div>

                {/* Confirm Password */}
                <div className='reset-password-form__input-group'>
                    <label>Xác nhận mật khẩu</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        className={`reset-password-form__input ${
                            validationErrors.confirmPassword
                                ? 'reset-password-form__input--error'
                                : ''
                        }`}
                        placeholder='Nhập lại mật khẩu'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        disabled={loading}
                    />
                    {validationErrors.confirmPassword && (
                        <span className='reset-password-form__error-text'>
                            {validationErrors.confirmPassword}
                        </span>
                    )}
                </div>

                <button
                    type='submit'
                    className='reset-password-form__submit-btn'
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2
                                className='reset-password-form__spinner'
                                size={20}
                            />
                            <span>Đang xử lý...</span>
                        </>
                    ) : (
                        'Đặt lại mật khẩu'
                    )}
                </button>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
