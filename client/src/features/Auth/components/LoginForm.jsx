// LoginForm.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import "../styles/LoginForm.css";

function LoginForm({ onClose, onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    // TODO: gọi API login ở đây
    console.log('Login submit', formData);
  };

  const handleGoogleLogin = () => {
    // TODO: tích hợp OAuth Google
    console.log('Google Login');
  };

  const handleEmailLogin = () => {
    // TODO: login bằng email
    console.log('Email Login');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__header">
        <h2 className="login-form__title">Người tìm việc</h2>

        <div className="login-form__tabs">
          <button
            type="button"
            className="login-form__tab login-form__tab--active"
          >
            Đăng nhập
          </button>
          <span className="login-form__tab-divider">hoặc</span>
          <button
            type="button"
            className="login-form__tab"
            onClick={onSwitchToRegister}
          >
            Đăng ký
          </button>
        </div>
      </div>

      <div className="login-form__body">
        {/* Phone */}
        <div className="login-form__input-group">
          <input
            type="tel"
            name="phone"
            className="login-form__input"
            placeholder="Nhập số điện thoại của bạn"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div className="login-form__input-group">
          <div className="login-form__input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="login-form__input"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="login-form__toggle-btn"
              onClick={() => setShowPassword(s => !s)}
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="login-form__submit-btn">
          Đăng nhập
        </button>

        {/* Divider */}
        <div className="login-form__divider">
          <span>Hoặc</span>
        </div>

        {/* Social Buttons */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="login-form__social-btn login-form__social-btn--google"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Đăng nhập bằng Google
        </button>

        <button
          type="button"
          onClick={handleEmailLogin}
          className="login-form__social-btn login-form__social-btn--email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 7l-10 7L2 7"/>
          </svg>
          Đăng nhập bằng Email
        </button>
      </div>

      <div className="login-form__footer">
        <p className="login-form__terms">
          Bằng việc đăng nhập, tôi đồng ý chia sẻ thông tin cá nhân của mình theo{' '}
          <a href="#" className="login-form__link">Điều khoản sử dụng</a> và{' '}
          <a href="#" className="login-form__link">Chính sách bảo mật</a>.
        </p>
        {/* Nếu muốn có nút đóng modal */}
        {onClose && (
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <button
              type="button"
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
