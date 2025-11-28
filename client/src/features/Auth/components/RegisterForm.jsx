import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import "../styles/RegisterForm.css"

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

  const handleSubmit = () => {
    console.log('Register:', formData);
  };

  const handleGoogleSignup = () => {
    console.log('Google Signup');
  };

  const handleEmailSignup = () => {
    console.log('Email Signup');
  };

  return (
    <div className="register-form">
      <div className="register-form__header">
        <h2 className="register-form__title">Người tìm việc</h2>
        
        <div className="register-form__tabs">
          <button 
            className="register-form__tab"
            onClick={onSwitchToLogin}
          >
            Đăng nhập
          </button>
          <span className="register-form__tab-divider">hoặc</span>
          <button className="register-form__tab register-form__tab--active">
            Đăng ký
          </button>
        </div>
      </div>

      <div className="register-form__body">
        {/* Phone Input */}
        <div className="register-form__input-group">
          <input
            type="tel"
            name="phone"
            className="register-form__input"
            placeholder="Nhập số điện thoại của bạn"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Password Input */}
        <div className="register-form__input-group">
          <div className="register-form__input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="register-form__input"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              className="register-form__toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="register-form__input-group">
          <div className="register-form__input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="register-form__input"
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="register-form__submit-btn">
          Tiếp tục
        </button>

        {/* Divider */}
        <div className="register-form__divider">
          <span>Hoặc</span>
        </div>

        {/* Social Signup Buttons */}
        <button onClick={handleGoogleSignup} className="register-form__social-btn register-form__social-btn--google">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Đăng nhập bằng Google
        </button>

        <button onClick={handleEmailSignup} className="register-form__social-btn register-form__social-btn--email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 7l-10 7L2 7"/>
          </svg>
          Đăng nhập bằng Email
        </button>
      </div>

      <div className="register-form__footer">
        <p className="register-form__terms">
          Bằng việc đăng nhập, tôi đồng ý chia sẻ thông tin cá nhân của mình với nhà tuyển dụng theo các{' '}
          <a href="#" className="register-form__link">Điều khoản sử dụng</a>,{' '}
          <a href="#" className="register-form__link">Chính sách bảo mật</a> và{' '}
          <a href="#" className="register-form__link">Chính sách dữ liệu cá nhân</a> của Vieclam24h
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;