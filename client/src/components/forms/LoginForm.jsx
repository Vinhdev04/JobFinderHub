// LoginForm.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './LoginForm.css';
import GithubLoginButton from '@features/auth/components/GithubLoginButton';
import GoogleLoginButton from '@features/auth/components/GoogleLoginButton';

function LoginForm({ onClose, onSwitchToRegister }) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e?.preventDefault?.();
        // TODO: gọi API login ở đây
        console.log('Login submit', formData);
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
                {/* Phone */}
                <div className='login-form__input-group'>
                    <input
                        type='tel'
                        name='phone'
                        className='login-form__input'
                        placeholder='Nhập số điện thoại của bạn'
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Password */}
                <div className='login-form__input-group'>
                    <div className='login-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            className='login-form__input'
                            placeholder='Mật khẩu'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <button
                            type='button'
                            className='login-form__toggle-btn'
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={
                                showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <button type='submit' className='login-form__submit-btn'>
                    Đăng nhập
                </button>

                {/* Divider */}
                <div className='login-form__divider'>
                    <span>Hoặc</span>
                </div>

                <GoogleLoginButton />
                <GithubLoginButton />
            </div>

            <div className='login-form__footer'>
                <p className='login-form__terms'>
                    Bằng việc đăng nhập, tôi đồng ý chia sẻ thông tin cá nhân
                    của mình theo{' '}
                    <a href='#' className='login-form__link'>
                        Điều khoản sử dụng
                    </a>{' '}
                    và{' '}
                    <a href='#' className='login-form__link'>
                        Chính sách bảo mật
                    </a>
                    .
                </p>
                {/* Nếu muốn có nút đóng modal */}
                {onClose && (
                    <div style={{ textAlign: 'center', marginTop: 12 }}>
                        <button
                            type='button'
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#6b7280',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}

export default LoginForm;
