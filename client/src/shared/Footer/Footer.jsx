import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  Apple,
  Smartphone,
  ChevronUp,
  Building2,
  Users,
  Award,
  TrendingUp,
  Hexagon,
  Layers,
  Clock,
  Zap
} from 'lucide-react';
import './Footer.css';
import { stats, contacts, apps, linkColumns, techCards, socialLinks } from './const';
const Footer = () => {
 
  const [activeSection, setActiveSection] = useState(null);


  // Toggle mobile sections
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

 
  return (
    <footer className="footer">
      {/* Background Decorations */}
      <div className="footer__bg-decoration">
        <div className="footer__glow footer__glow--blue"></div>
        <div className="footer__glow footer__glow--purple"></div>
      </div>

      {/* Main Content */}
      <div className="footer__content">
        
        {/* Stats Section */}
        <div className="footer__stats">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="footer__stat-card"
            >
              <div className={`footer__stat-icon-wrapper footer__stat-icon-wrapper--${stat.variant}`}>
                <stat.icon className="footer__stat-icon" />
              </div>
              <div className="footer__stat-value">{stat.value}</div>
              <div className="footer__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="footer__grid">
          
          {/* Company Column */}
          <div className="footer__column--company">
            {/* Mobile Toggle */}
            <button 
              onClick={() => toggleSection('company')}
              className="footer__section-toggle"
              aria-expanded={activeSection === 'company'}
            >
              <span className="footer__section-toggle-text">JobFinderHub</span>
              <ChevronUp 
                className={`footer__toggle-icon ${
                  activeSection === 'company' 
                    ? 'footer__toggle-icon--active' 
                    : 'footer__toggle-icon--inactive'
                }`}
              />
            </button>
            
            <div className={`footer__collapsible ${
              activeSection === 'company' ? 'footer__collapsible--active' : ''
            }`}>
              
              {/* Logo */}
              <div className="footer__logo">
                <div className="footer__logo-icon-wrapper">
                  <span style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '700', 
                    color: '#ffffff' 
                  }}>
                    JF
                  </span>
                </div>
                <div>
                  <div className="footer__logo-text">JobFinderHub</div>
                  <div className="footer__logo-subtitle">
                    Tiếp lợi thế - Nối thành công
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="footer__contact-list">
                {contacts.map((contact, idx) => (
                  <div key={idx} className="footer__contact-item">
                    <div className={`footer__contact-icon-wrapper footer__contact-icon-wrapper--${contact.variant}`}>
                      <contact.icon className={`footer__contact-icon footer__contact-icon--${contact.variant}`} />
                    </div>
                    <div className="footer__contact-info">
                      <div className="footer__contact-label">{contact.label}</div>
                      <div className="footer__contact-value">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* App Download */}
              <div className="footer__apps">
                <h4 className="footer__section-title">Tải ứng dụng</h4>
                <div className="footer__app-buttons">
                  {apps.map((app, idx) => (
                    <button key={idx} className="footer__app-button">
                      <div className={`footer__app-icon-wrapper footer__app-icon-wrapper--${app.variant}`}>
                        <app.icon className="footer__app-icon" />
                      </div>
                      <div className="footer__app-info">
                        <div className="footer__app-label">{app.subtitle}</div>
                        <div className="footer__app-name">{app.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {linkColumns.map((column, colIdx) => (
            <div key={colIdx} className="footer__links-column">
              {/* Mobile Toggle */}
              <button 
                onClick={() => toggleSection(column.id)}
                className="footer__section-toggle"
                aria-expanded={activeSection === column.id}
              >
                {column.title}
                <ChevronUp 
                  className={`footer__toggle-icon ${
                    activeSection === column.id 
                      ? 'footer__toggle-icon--active' 
                      : 'footer__toggle-icon--inactive'
                  }`}
                />
              </button>
              
              {/* Desktop Title */}
              <h4 className="footer__heading">
                <column.icon className="footer__heading-icon" />
                {column.title}
              </h4>
              
              {/* Links */}
              <ul className={`footer__links footer__collapsible ${
                activeSection === column.id ? 'footer__collapsible--active' : ''
              }`}>
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Ecosystem */}
        <div className="footer__tech">
          <h3 className="footer__tech-title">
            Hệ sinh thái <span className="footer__tech-title-highlight">HR Tech</span>
          </h3>
          <div className="footer__tech-grid">
            {techCards.map((tech, idx) => (
              <div 
                key={idx}
                className={`footer__tech-card footer__tech-card--${tech.variant}`}
              >
                <div className="footer__tech-icon-wrapper">
                  <tech.icon className="footer__tech-icon" />
                </div>
                <h4 className="footer__tech-name">{tech.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="footer__social">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.url} 
              className="footer__social-link"
              aria-label={social.label}
            >
              <social.icon className="footer__social-icon" />
            </a>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="footer__bottom">
          <div className="footer__company-info">
            <h4 className="footer__company-name">
              Công ty Cổ phần JobFinderHub Việt Nam
            </h4>
            <div className="footer__legal-info">
              <p>
                Giấy phép ĐKKD: <span className="footer__legal-highlight">0107307178</span> cấp ngày 21/01/2016, 
                thay đổi lần thứ 17 ngày 03/04/2025 tại Sở Tài chính Thành phố Hà Nội
              </p>
              <p>
                Giấy phép hoạt động dịch vụ việc làm số: <span className="footer__legal-highlight">44/2024/SLĐTBXH-GP</span>
              </p>
              <p>
                Trụ sở HN: Tòa FS - GoldSeason số 47 Nguyễn Tuân, Phường Thanh Xuân, 
                Thành phố Hà Nội, Việt Nam
              </p>
              <p>
                Chi nhánh HCM: Tòa nhà Dali, 24C Phan Đăng Lưu, Phường Gia Định, TP HCM
              </p>
            </div>
          </div>
          
          <div className="footer__copyright">
            © 2025 JobFinderHub. All rights reserved.
          </div>
        </div>
      </div>

  
    </footer>
  );
};

export default Footer;