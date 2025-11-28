import React, { useState, useEffect } from 'react';
import { Button, Badge, Input, Dropdown, Menu } from 'antd';
import { 
  BellOutlined, 
  UserOutlined, 
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  HeartOutlined,
  MoonOutlined,
  SunOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  TeamOutlined,
  DownOutlined,
  CheckOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
  EyeOutlined
} from '@ant-design/icons';
import './Navbar.css';
import { navItems, cities, jobMenu } from './const.jsx';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCity, setSelectedCity] = useState('Hồ Chí Minh');
  const [jobMenuOpen, setJobMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const cityMenu = (
    <Menu 
      className="jfh-dropdown-menu jfh-dropdown-menu--cities"
      selectedKeys={[selectedCity]}
      onClick={({ key }) => setSelectedCity(key)}
    >
      <div className="jfh-dropdown-menu__search">
        <Input 
          placeholder="Tìm kiếm tỉnh thành..."
          prefix={<SearchOutlined />}
          size="small"
        />
      </div>
      {cities.map(city => (
        <Menu.Item 
          key={city.name} 
          className="jfh-dropdown-menu__item jfh-dropdown-menu__item--city"
        >
          <div className="jfh-city-item">
            <span className="jfh-city-item__name">
              <EnvironmentOutlined /> {city.name}
            </span>
            <span className="jfh-city-item__count">{city.count.toLocaleString()} việc làm</span>
          </div>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item key="all" className="jfh-dropdown-menu__item jfh-dropdown-menu__item--all">
        <strong>Tất cả tỉnh thành</strong>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* Top Banner */}
      <div className="jfh-banner">
        <div className="jfh-banner__content">
          <span className="jfh-banner__icon">🎯</span>
          <span className="jfh-banner__text">
            Ứng tuyển 1 chạm - Mọi lúc mọi nơi
          </span>
          <span className="jfh-banner__highlight">
            JobFinderHub: Tìm Việc Nhanh
          </span>
          <Button className="jfh-banner__button" size="small">
            Tải app ngay
          </Button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`jfh-navbar ${isScrolled ? 'jfh-navbar--scrolled' : ''}`}>
        <div className="jfh-navbar__container">
          {/* Logo */}
          <div className="jfh-navbar__logo">
            <div className="jfh-navbar__logo-icon">
              <SearchOutlined className="jfh-navbar__logo-icon-svg" />
              <div className="jfh-navbar__logo-icon-pulse" />
            </div>
            <div className="jfh-navbar__logo-text">
              <div className="jfh-navbar__logo-title">JobFinderHub</div>
              <div className="jfh-navbar__logo-subtitle">Đối Tác Sự Nghiệp Của Bạn</div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="jfh-navbar__search">
            <Input
              size="large"
              placeholder="Tìm kiếm công việc, công ty..."
              prefix={<SearchOutlined className="jfh-navbar__search-icon" />}
              suffix={
                <Dropdown 
                  overlay={cityMenu} 
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <Button type="link" size="small" className="jfh-navbar__search-location">
                    <EnvironmentOutlined /> {selectedCity} <DownOutlined style={{ fontSize: '10px' }} />
                  </Button>
                </Dropdown>
              }
              className="jfh-navbar__search-input"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="jfh-navbar__nav">
            {navItems.map(item => {
              if (item.hasDropdown) {
                return (
                  <Dropdown 
                    key={item.id}
                    overlay={jobMenu} 
                    trigger={['click']}
                    visible={jobMenuOpen}
                    onVisibleChange={setJobMenuOpen}
                  >
                    <button
                      className={`jfh-navbar__nav-item ${activeNav === item.id ? 'jfh-navbar__nav-item--active' : ''}`}
                      onClick={() => setActiveNav(item.id)}
                    >
                      {item.icon}
                      <span className="jfh-navbar__nav-item-label">{item.label}</span>
                      <DownOutlined className="jfh-navbar__nav-item-arrow" />
                    </button>
                  </Dropdown>
                );
              }
              
              return (
                <button
                  key={item.id}
                  className={`jfh-navbar__nav-item ${activeNav === item.id ? 'jfh-navbar__nav-item--active' : ''}`}
                  onClick={() => setActiveNav(item.id)}
                >
                  {item.icon}
                  <span className="jfh-navbar__nav-item-label">{item.label}</span>
                  {item.badge && (
                    <span className="jfh-navbar__nav-item-badge">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="jfh-navbar__actions">
            {/* Theme Toggle */}
            <button 
              className="jfh-navbar__action-btn jfh-navbar__action-btn--theme"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>

            {/* Notification */}
            <Badge count={5} className="jfh-navbar__notification">
              <button className="jfh-navbar__action-btn">
                <BellOutlined />
              </button>
            </Badge>

            {/* User Menu - Desktop */}
            <div className="jfh-navbar__user">
              <Button to="/auth.login" 
                type="text" 
                icon={<UserOutlined />}
                className="jfh-navbar__user-btn"
              >
                <span className="jfh-navbar__user-text">Đăng nhập</span>
              </Button>
            </div>

            {/* Recruiter Button */}
            <Button  to=""
              type="primary" 
              icon={<TeamOutlined />}
              className="jfh-navbar__recruiter-btn"
            >
              <span className="jfh-navbar__recruiter-text">Nhà tuyển dụng</span>
            </Button>

            {/* Post Job Button */}
            <Button to="" 
              type="primary" 
              icon={<PlusOutlined />}
              className="jfh-navbar__post-btn"
            >
              <span className="jfh-navbar__post-text">Đăng tin</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="jfh-navbar__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="jfh-navbar__mobile-search">
          <Input
            placeholder="Tìm kiếm..."
            prefix={<SearchOutlined />}
            className="jfh-navbar__mobile-search-input"
          />
        </div>

        {/* Mobile Menu */}
        <div className={`jfh-navbar__mobile-menu ${isMobileMenuOpen ? 'jfh-navbar__mobile-menu--open' : ''}`}>
          {/* Mobile Nav Items */}
          <div className="jfh-navbar__mobile-section">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`jfh-navbar__mobile-item ${activeNav === item.id ? 'jfh-navbar__mobile-item--active' : ''}`}
                onClick={() => {
                  setActiveNav(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="jfh-navbar__mobile-item-badge">{item.badge}</span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="jfh-navbar__mobile-section jfh-navbar__mobile-section--actions">
            <Button to="/auth/login"
              type="primary" 
              size="large"
              icon={<UserOutlined />}
              className="jfh-navbar__mobile-btn"
              block
            >
              Đăng nhập / Đăng ký
            </Button>
            <Button to="" 
              type="primary"
              size="large"
              icon={<TeamOutlined />}
              className="jfh-navbar__mobile-btn jfh-navbar__mobile-btn--recruiter"
              block
            >
              Dành cho Nhà tuyển dụng
            </Button>
            <Button to=""
              size="large"
              icon={<PlusOutlined />}
              className="jfh-navbar__mobile-btn jfh-navbar__mobile-btn--post"
              block
            >
              Đăng tin tuyển dụng
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;