// client/src/components/forms/ForgotPasswordForm.jsx
import React, { useState } from 'react';
import { Mail, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './ForgotPasswordForm.css';

function ForgotPasswordForm({ onClose, onSwitchToLogin }) {
    const { forgotPassword, error, clearError } = useAuth();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [validationError, setValidationError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!email.trim()) {
            setValidationError('Email không được để trống');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setValidationError('Email không hợp lệ');
            return;
        }

        setLoading(true);
        setValidationError('');
        if (error) clearError();

        try {
            await forgotPassword(email.toLowerCase().trim());
            setSuccess(true);
        } catch (error) {
            console.error('Forgot password failed:', error.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className='forgot-password-form'>
                <div className='forgot-password-form__success'>
                    <CheckCircle size={64} color='#10b981' />
                    <h2>Kiểm tra email của bạn</h2>
                    <p>
                        Chúng tôi đã gửi link đặt lại mật khẩu đến <strong>{email}</strong>.
                        Link có hiệu lực trong <strong>1 giờ</strong>.
                    </p>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '12px' }}>
                        Không nhận được email? Kiểm tra thư mục spam hoặc{' '}
                        <button
                            type='button'
                            onClick={() => setSuccess(false)}
                            className='forgot-password-form__link'
                        >
                            thử lại
                        </button>
                    </p>
                    <button
                        type='button'
                        onClick={onSwitchToLogin}
                        className='forgot-password-form__submit-btn'
                        style={{ marginTop: '24px' }}
                    >
                        Quay lại đăng nhập
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form className='forgot-password-form' onSubmit={handleSubmit}>
            <div className='forgot-password-form__header'>
                <h2 className='forgot-password-form__title'>Quên mật khẩu</h2>
                <p className='forgot-password-form__subtitle'>
                    Nhập email của bạn, chúng tôi sẽ gửi link đặt lại mật khẩu
                </p>
            </div>

            <div className='forgot-password-form__body'>
                {error && (
                    <div className='forgot-password-form__error-alert'>
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                <div className='forgot-password-form__input-group'>
                    <div className='forgot-password-form__input-wrapper'>
                        <Mail size={20} className='forgot-password-form__input-icon' />
                        <input
                            type='email'
                            className={`forgot-password-form__input ${validationError ? 'forgot-password-form__input--error' : ''}`}
                            placeholder='Nhập email của bạn'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setValidationError('');
                                if (error) clearError();
                            }}
                            disabled={loading}
                            autoComplete='email'
                        />
                    </div>
                    {validationError && (
                        <span className='forgot-password-form__error-text'>
                            {validationError}
                        </span>
                    )}
                </div>

                <button
                    type='submit'
                    className='forgot-password-form__submit-btn'
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className='forgot-password-form__spinner' size={20} />
                            <span>Đang gửi...</span>
                        </>
                    ) : (
                        'Gửi link đặt lại mật khẩu'
                    )}
                </button>

                <button
                    type='button'
                    onClick={onSwitchToLogin}
                    className='forgot-password-form__back-btn'
                    disabled={loading}
                >
                    ← Quay lại đăng nhập
                </button>
            </div>
        </form>
    );
}

export default ForgotPasswordForm;

