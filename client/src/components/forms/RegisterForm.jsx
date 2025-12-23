import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import GoogleLoginButton from '@features/auth/components/GoogleLoginButton';
import GithubLoginButton from '@features/auth/components/GithubLoginButton';
import './RegisterForm.css';

function RegisterForm({ onClose, onSwitchToLogin }) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e?.preventDefault?.();
        // TODO: Call API register
        console.log('Register:', formData);
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
                {/* Phone Input */}
                <div className='register-form__input-group'>
                    <input
                        type='tel'
                        name='phone'
                        className='register-form__input'
                        placeholder='Nhập số điện thoại của bạn'
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Password Input */}
                <div className='register-form__input-group'>
                    <div className='register-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            className='register-form__input'
                            placeholder='Mật khẩu'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <button
                            type='button'
                            className='register-form__toggle-btn'
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={
                                showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password Input */}
                <div className='register-form__input-group'>
                    <div className='register-form__input-wrapper'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            className='register-form__input'
                            placeholder='Xác nhận mật khẩu'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className='register-form__submit-btn'
                    type='button'
                >
                    Tiếp tục
                </button>

                {/* Divider */}
                <div className='register-form__divider'>
                    <span>Hoặc</span>
                </div>

                {/* Social Login Buttons */}
                <GoogleLoginButton />
                <GithubLoginButton />
            </div>

            <div className='register-form__footer'>
                <p className='register-form__terms'>
                    Bằng việc đăng nhập, tôi đồng ý chia sẻ thông tin cá nhân
                    của mình với nhà tuyển dụng theo các{' '}
                    <a href='#' className='register-form__link'>
                        Điều khoản sử dụng
                    </a>
                    ,{' '}
                    <a href='#' className='register-form__link'>
                        Chính sách bảo mật
                    </a>{' '}
                    và{' '}
                    <a href='#' className='register-form__link'>
                        Chính sách dữ liệu cá nhân
                    </a>{' '}
                    của JobFinderHub
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;
