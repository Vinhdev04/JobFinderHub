import React from 'react';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  AppleOutlined,
  AndroidOutlined
} from '@ant-design/icons';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__container">
          {/* Company Info */}
          <div className="footer__column footer__column--brand">
            <div className="footer__logo">
              <img src={logo} alt="JobFinderHub Logo" className="footer__logo-img" />
              <div className="footer__logo-text">
                <span className="footer__logo-title">JobFinderHub</span>
                <span className="footer__logo-subtitle">Tiếp lợi thế - Nối thành công</span>
              </div>
            </div>

            <div className="footer__badges">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google-for-Startups-logo.svg" 
                alt="Google for Startups" 
                className="footer__badge"
              />
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__title">Liên hệ</h4>
              <div className="footer__contact-item">
                <PhoneOutlined className="footer__icon" />
                <span>
                  Hotline: <strong>(024) 7107 6480 (Giờ hành chính)</strong>
                </span>
              </div>
              <div className="footer__contact-item">
                <MailOutlined className="footer__icon" />
                <span>Email: <strong>hotro@jobfinderhub.vn</strong></span>
              </div>
            </div>

            {/* App Download */}
            <div className="footer__apps">
              <h4 className="footer__title">Ứng dụng tải xuống</h4>
              <div className="footer__app-buttons">
                <a href="#" className="footer__app-button">
                  <AppleOutlined className="footer__app-icon" />
                  <div className="footer__app-text">
                    <span className="footer__app-label">Download on the</span>
                    <span className="footer__app-name">App Store</span>
                  </div>
                </a>
                <a href="#" className="footer__app-button">
                  <AndroidOutlined className="footer__app-icon" />
                  <div className="footer__app-text">
                    <span className="footer__app-label">GET IT ON</span>
                    <span className="footer__app-name">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer__social">
              <h4 className="footer__title">Cộng đồng JobFinderHub</h4>
              <div className="footer__social-links">
                <a href="#" className="footer__social-link">
                  <FacebookOutlined />
                </a>
                <a href="#" className="footer__social-link">
                  <YoutubeOutlined />
                </a>
                <a href="#" className="footer__social-link">
                  <LinkedinOutlined />
                </a>
                <a href="#" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Về JobFinderHub</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Giới thiệu</a></li>
              <li><a href="#" className="footer__link">Góc báo chí</a></li>
              <li><a href="#" className="footer__link">Tuyển dụng</a></li>
              <li><a href="#" className="footer__link">Liên hệ</a></li>
              <li><a href="#" className="footer__link">Hỏi đáp</a></li>
              <li><a href="#" className="footer__link">Chính sách bảo mật</a></li>
              <li><a href="#" className="footer__link">Điều khoản dịch vụ</a></li>
            </ul>
          </div>

          {/* Partner Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Đối tác</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">TestCenter</a></li>
              <li><a href="#" className="footer__link">TopHR</a></li>
              <li><a href="#" className="footer__link">ViecNgay</a></li>
              <li><a href="#" className="footer__link">Happy Time</a></li>
            </ul>
          </div>

          {/* CV Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Hồ sơ và CV</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Quản lý CV của bạn</a></li>
              <li><a href="#" className="footer__link">Hướng dẫn viết CV</a></li>
              <li><a href="#" className="footer__link">Thư viện CV theo ngành nghề</a></li>
              <li><a href="#" className="footer__link">Review CV</a></li>
            </ul>

            <h3 className="footer__heading footer__heading--spacing">Khám phá</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Ứng dụng di động JobFinderHub</a></li>
              <li><a href="#" className="footer__link">Tính lương Gross - Net</a></li>
              <li><a href="#" className="footer__link">Tính lãi suất kép</a></li>
              <li><a href="#" className="footer__link">Lập kế hoạch tiết kiệm</a></li>
              <li><a href="#" className="footer__link">Tính bảo hiểm thất nghiệp</a></li>
              <li><a href="#" className="footer__link">Tính bảo hiểm xã hội một lần</a></li>
              <li><a href="#" className="footer__link">Trắc nghiệm MBTI</a></li>
              <li><a href="#" className="footer__link">Trắc nghiệm MI</a></li>
            </ul>
          </div>

          {/* Career Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Xây dựng sự nghiệp</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Việc làm tốt nhất</a></li>
              <li><a href="#" className="footer__link">Việc làm lương cao</a></li>
              <li><a href="#" className="footer__link">Việc làm quản lý</a></li>
              <li><a href="#" className="footer__link">Việc làm IT</a></li>
              <li><a href="#" className="footer__link">Việc làm Senior</a></li>
              <li><a href="#" className="footer__link">Việc làm bán thời gian</a></li>
            </ul>

            <h3 className="footer__heading footer__heading--spacing">Quy tắc chung</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Điều kiện giao dịch chung</a></li>
              <li><a href="#" className="footer__link">Giá dịch vụ & Cách thanh toán</a></li>
              <li><a href="#" className="footer__link">Thông tin về vận chuyển</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__company-info">
            <h4 className="footer__company-name">Công ty Cổ phần JobFinderHub Việt Nam</h4>
            <div className="footer__legal">
              <p className="footer__legal-item">
                <EnvironmentOutlined className="footer__icon" />
                Giấy phép đăng ký kinh doanh số: <strong>0107307178</strong> cấp ngày 21/01/2016, thay đổi lần thứ 17 ngày 03/04/2025 tại Sở Tài chính Thành phố Hà Nội
              </p>
              <p className="footer__legal-item">
                <EnvironmentOutlined className="footer__icon" />
                Giấy phép hoạt động dịch vụ việc làm số: <strong>44/2024/SLĐTBXH-GP</strong>
              </p>
              <p className="footer__legal-item">
                <EnvironmentOutlined className="footer__icon" />
                Trụ sở HN: <strong>Tòa FS - GoldSeason số 47 Nguyễn Tuân, Phường Thanh Xuân, Thành phố Hà Nội, Việt Nam</strong>
              </p>
              <p className="footer__legal-item">
                <EnvironmentOutlined className="footer__icon" />
                Chi nhánh HCM: <strong>Tòa nhà Dali, 24C Phan Đăng Lưu, Phường Gia Định, TP HCM</strong>
              </p>
            </div>
          </div>

          <div className="footer__qr">
            <div className="footer__qr-code">
              <div className="footer__qr-placeholder">
                <svg viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="white"/>
                  <rect x="10" y="10" width="30" height="30" fill="black"/>
                  <rect x="60" y="10" width="30" height="30" fill="black"/>
                  <rect x="10" y="60" width="30" height="30" fill="black"/>
                  <rect x="15" y="15" width="20" height="20" fill="white"/>
                  <rect x="65" y="15" width="20" height="20" fill="white"/>
                  <rect x="15" y="65" width="20" height="20" fill="white"/>
                  <rect x="20" y="20" width="10" height="10" fill="black"/>
                  <rect x="70" y="20" width="10" height="10" fill="black"/>
                  <rect x="20" y="70" width="10" height="10" fill="black"/>
                </svg>
              </div>
              <span className="footer__qr-text">jobfinderhub.com.vn</span>
            </div>
          </div>
        </div>
      </div>

      {/* HR Tech Section */}
      <div className="footer__tech">
        <div className="footer__container">
          <h3 className="footer__tech-title">Hệ sinh thái HR Tech của JobFinderHub</h3>
          <div className="footer__tech-cards">
            <a href="#" className="footer__tech-card footer__tech-card--blue">
              <div className="footer__tech-icon">
                <svg viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 5L5 15v10l15 10 15-10V15L20 5zm0 3.5L31.5 16 20 23.5 8.5 16 20 8.5zM8 18l11 7.5v9L8 27v-9zm24 0v9l-11 7.5v-9L32 18z"/>
                </svg>
              </div>
              <div className="footer__tech-content">
                <h4 className="footer__tech-name">Nền tảng công nghệ tuyển dụng thông minh JobFinderHub.vn</h4>
              </div>
            </a>

            <a href="#" className="footer__tech-card footer__tech-card--orange">
              <div className="footer__tech-icon">
                <svg viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 8L8 20l12 12 12-12L20 8zm0 5.5L26.5 20 20 26.5 13.5 20 20 13.5z"/>
                </svg>
              </div>
              <div className="footer__tech-content">
                <h4 className="footer__tech-name">Nền tảng quản lý & gia tăng trải nghiệm nhân viên</h4>
              </div>
            </a>

            <a href="#" className="footer__tech-card footer__tech-card--blue-light">
              <div className="footer__tech-icon">
                <svg viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 5c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 3c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z"/>
                  <path d="M20 12v8l6 3.5"/>
                </svg>
              </div>
              <div className="footer__tech-content">
                <h4 className="footer__tech-name">Nền tảng thiết lập và đánh giá năng lực nhân viên theo định kỳ</h4>
              </div>
            </a>

            <a href="#" className="footer__tech-card footer__tech-card--green">
              <div className="footer__tech-icon">
                <svg viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 5L5 20l15 15 15-15L20 5zm0 5.858L29.142 20 20 29.142 10.858 20 20 10.858z"/>
                </svg>
              </div>
              <div className="footer__tech-content">
                <h4 className="footer__tech-name">Giải pháp quản trị tuyển dụng hiệu suất cao ShiRing.ai</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;