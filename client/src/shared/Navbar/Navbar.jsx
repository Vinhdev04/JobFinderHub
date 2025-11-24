import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Button, Badge } from 'antd';
import { 
  BellOutlined, 
  UserOutlined, 
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  HomeOutlined,
  SolutionOutlined,
  BookOutlined,
  TrophyOutlined,
  SafetyOutlined,
  HeartOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.ItemGroup title="Quản lý việc làm">
        <Menu.Item key="1" icon={<SearchOutlined />}>Việc làm đã ứng tuyển</Menu.Item>
        <Menu.Item key="2" icon={<HeartOutlined />}>Việc làm đã lưu</Menu.Item>
        <Menu.Item key="3" icon={<BellOutlined />}>Việc làm chờ ứng tuyển</Menu.Item>
        <Menu.Item key="4" icon={<SafetyOutlined />}>Nhà tuyển dụng xem hồ sơ bạn</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="5" icon={<SearchOutlined />}>Tìm Việc Làm</Menu.Item>
      <Menu.Item key="6" icon={<SolutionOutlined />}>CV Hay</Menu.Item>
      <Menu.Item key="7" icon={<BookOutlined />}>VietnamSalary</Menu.Item>
      <Menu.Item key="8" icon={<TrophyOutlined />}>CareerMap</Menu.Item>
    </Menu>
  );

  const toolMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.Item key="1" icon={<BookOutlined />}>Cẩm Nang Nghề Nghiệp</Menu.Item>
      <Menu.Item key="2" icon={<SolutionOutlined />}>La Bàn Sự Nghiệp</Menu.Item>
      <Menu.Item key="3" icon={<TrophyOutlined />}>Trạm Sạc Kỹ Năng</Menu.Item>
      <Menu.Item key="4" icon={<SearchOutlined />}>Tọa Độ Nhân Tài</Menu.Item>
      <Menu.Item key="5" icon={<SafetyOutlined />}>Bản Tin Công Sở</Menu.Item>
      <Menu.Item key="6" icon={<HeartOutlined />}>Kì Ốt Vui Vẻ</Menu.Item>
      <Menu.Item key="7" icon={<FileTextOutlined />}>Loa tin tức</Menu.Item>
    </Menu>
  );

  const careerMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.Item key="1" icon={<BookOutlined />}>Cẩm Nang Nghề Nghiệp</Menu.Item>
      <Menu.Item key="2" icon={<SolutionOutlined />}>La Bàn Sự Nghiệp</Menu.Item>
      <Menu.Item key="3" icon={<TrophyOutlined />}>Trạm Sạc Kỹ Năng</Menu.Item>
      <Menu.Item key="4" icon={<SearchOutlined />}>Tọa Độ Nhân Tài</Menu.Item>
      <Menu.Item key="5" icon={<SafetyOutlined />}>Bản Tin Công Sở</Menu.Item>
      <Menu.Item key="6" icon={<HeartOutlined />}>Kì Ốt Vui Vẻ</Menu.Item>
      <Menu.Item key="7" icon={<FileTextOutlined />}>Loa tin tức</Menu.Item>
    </Menu>
  );

  const regionMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.Item key="1" icon={<HomeOutlined />}>Miền Bắc</Menu.Item>
      <Menu.Item key="2" icon={<HomeOutlined />}>Miền Trung</Menu.Item>
      <Menu.Item key="3" icon={<HomeOutlined />}>Miền Nam</Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.Item key="1" icon={<UserOutlined />}>Đăng nhập</Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>Đăng ký</Menu.Item>
      <Menu.Item key="3" icon={<SearchOutlined />}>Tìm ứng viên</Menu.Item>
    </Menu>
  );

  const recruiterMenu = (
    <Menu className="navbar__dropdown-menu">
      <Menu.Item key="1" icon={<FileTextOutlined />}>Đăng tuyển</Menu.Item>
      <Menu.Item key="2" icon={<SearchOutlined />}>Tìm ứng viên</Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>Nhà Tuyển Dụng</Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* Top Banner */}
      <div className="navbar-banner">
        <div className="navbar-banner__content">
          <span className="navbar-banner__icon">🎯</span>
          <span className="navbar-banner__text">
            Ứng tuyển 1 chạm - Mọi lúc mọi nơi
          </span>
          <span className="navbar-banner__app">Vieclam24h: Tìm Việc Nhanh</span>
          <Button className="navbar-banner__button" size="small">
            Tải app ngay
          </Button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo */}
          <div className="navbar__logo">
            <div className="navbar__logo-icon">
              <svg viewBox="0 0 100 100" className="navbar__logo-svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="3"/>
                <path d="M 30 45 L 45 60 L 70 35" fill="none" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="30" cy="30" r="3" fill="#00d4ff"/>
                <circle cx="70" cy="30" r="3" fill="#00d4ff"/>
                <circle cx="50" cy="70" r="3" fill="#00d4ff"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff"/>
                    <stop offset="100%" stopColor="#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-title">JobFinderHub</span>
              <span className="navbar__logo-subtitle">Đối Tác Sự Nghiệp Của Bạn</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar__menu">
            <Dropdown overlay={jobMenu} trigger={['hover']} placement="bottomCenter" overlayClassName="navbar__dropdown-overlay">
              <button className="navbar__menu-item" onClick={(e) => e.preventDefault()}>
                Việc làm <DownOutlined className="navbar__menu-icon" />
              </button>
            </Dropdown>

            <Dropdown overlay={toolMenu} trigger={['hover']} placement="bottomCenter" overlayClassName="navbar__dropdown-overlay">
              <button className="navbar__menu-item" onClick={(e) => e.preventDefault()}>
                Công cụ <DownOutlined className="navbar__menu-icon" />
              </button>
            </Dropdown>

            <Dropdown overlay={careerMenu} trigger={['hover']} placement="bottomCenter" overlayClassName="navbar__dropdown-overlay">
              <button className="navbar__menu-item" onClick={(e) => e.preventDefault()}>
                Cẩm nang nghề nghiệp <DownOutlined className="navbar__menu-icon" />
              </button>
            </Dropdown>

            <Dropdown overlay={regionMenu} trigger={['hover']} placement="bottomCenter" overlayClassName="navbar__dropdown-overlay">
              <button className="navbar__menu-item" onClick={(e) => e.preventDefault()}>
                Miền Nam <DownOutlined className="navbar__menu-icon" />
              </button>
            </Dropdown>
          </div>

          {/* Actions */}
          <div className="navbar__actions">
            <div className="navbar__user-info">
              <span className="navbar__user-label">Người tìm việc</span>
              <Dropdown overlay={userMenu} trigger={['hover']} overlayClassName="navbar__dropdown-overlay">
                <button className="navbar__user-button">
                  Đăng ký/Đăng nhập
                </button>
              </Dropdown>
            </div>

            <Badge count={5} className="navbar__notification">
              <Button 
                type="text" 
                icon={<BellOutlined />} 
                className="navbar__icon-button"
              />
            </Badge>

            <Dropdown overlay={recruiterMenu} trigger={['hover']} overlayClassName="navbar__dropdown-overlay">
              <Button type="primary" className="navbar__recruiter-button">
                <UserOutlined /> DÀNH CHO Nhà Tuyển Dụng
              </Button>
            </Dropdown>

            {/* Mobile Menu Toggle */}
            <Button
              type="text"
              icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              className="navbar__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="navbar__secondary">
          <div className="navbar__secondary-container">
            <button className="navbar__secondary-link navbar__secondary-link--active">
              <HomeOutlined /> Cẩm Nang Nghề Nghiệp
            </button>
            <button className="navbar__secondary-link">La Bàn Sự Nghiệp</button>
            <button className="navbar__secondary-link">Trạm Sạc Kỹ Năng</button>
            <button className="navbar__secondary-link">Tọa Độ Nhân Tài</button>
            <button className="navbar__secondary-link">Bản Tin Công Sở</button>
            <button className="navbar__secondary-link">Kì Ốt Vui Vẻ</button>
            <button className="navbar__secondary-link">Loa tin tức</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
          <div className="navbar__mobile-section">
            <h4 className="navbar__mobile-title">Việc làm</h4>
            <button className="navbar__mobile-link"><SearchOutlined /> Tìm Việc Làm</button>
            <button className="navbar__mobile-link"><SolutionOutlined /> CV Hay</button>
            <button className="navbar__mobile-link"><BookOutlined /> VietnamSalary</button>
            <button className="navbar__mobile-link"><TrophyOutlined /> CareerMap</button>
          </div>

          <div className="navbar__mobile-section">
            <h4 className="navbar__mobile-title">Công cụ</h4>
            <button className="navbar__mobile-link"><BookOutlined /> Cẩm Nang Nghề Nghiệp</button>
            <button className="navbar__mobile-link"><SolutionOutlined /> La Bàn Sự Nghiệp</button>
            <button className="navbar__mobile-link"><TrophyOutlined /> Trạm Sạc Kỹ Năng</button>
            <button className="navbar__mobile-link"><SearchOutlined /> Tọa Độ Nhân Tài</button>
          </div>

          <div className="navbar__mobile-section">
            <h4 className="navbar__mobile-title">Tài khoản</h4>
            <Button type="primary" block className="navbar__mobile-button">
              Đăng nhập
            </Button>
            <Button block className="navbar__mobile-button">
              Đăng ký
            </Button>
            <Button type="primary" block className="navbar__mobile-button navbar__mobile-button--recruiter">
              Dành cho Nhà Tuyển Dụng
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;