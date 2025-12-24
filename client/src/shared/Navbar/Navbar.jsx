// client/src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Badge, Input, Avatar } from 'antd';
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
    TeamOutlined,
    DownOutlined,
    CheckOutlined,
    FolderOpenOutlined,
    ClockCircleOutlined,
    EyeOutlined,
    LogoutOutlined,
    SettingOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { useAuth } from '@features/auth/hooks/useAuth.js';
import './Navbar.css';
import { navItems, cities } from './const.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuth();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const [selectedCity, setSelectedCity] = useState('Hồ Chí Minh');
    const [jobMenuOpen, setJobMenuOpen] = useState(false);
    const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [citySearchTerm, setCitySearchTerm] = useState('');

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
        document.documentElement.setAttribute(
            'data-theme',
            newTheme ? 'dark' : 'light'
        );
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const handleLogout = async () => {
        try {
            await logout();
            setUserMenuOpen(false);
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleNavigate = (path) => {
        navigate(path);
        setUserMenuOpen(false);
        setIsMobileMenuOpen(false);
    };

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(citySearchTerm.toLowerCase())
    );

    const getRoleDisplay = (role) => {
        const roleMap = {
            STUDENT: 'Sinh viên',
            RECRUITER: 'Nhà tuyển dụng',
            COMPANY_MANAGER: 'Quản lý công ty',
            INTERN_MANAGER: 'Quản lý thực tập',
            SYS_ADMIN: 'Quản trị viên'
        };
        return roleMap[role] || role;
    };

    // User Menu Dropdown
    const renderUserMenu = () => (
        <div className='jfh-dropdown-menu jfh-dropdown-menu--user'>
            <div className='jfh-user-info'>
                <Avatar
                    size={48}
                    icon={<UserOutlined />}
                    src={user?.avatar}
                    className='jfh-user-avatar'
                />
                <div className='jfh-user-details'>
                    <div className='jfh-user-name'>{user?.fullName}</div>
                    <div className='jfh-user-email'>{user?.email}</div>
                </div>
            </div>

            <div className='jfh-dropdown-divider'></div>

            <div
                className='jfh-dropdown-menu__item'
                onClick={() => handleNavigate('/dashboard')}
            >
                <DashboardOutlined /> Dashboard
            </div>

            <div
                className='jfh-dropdown-menu__item'
                onClick={() => handleNavigate('/profile')}
            >
                <UserOutlined /> Hồ sơ của tôi
            </div>

            <div
                className='jfh-dropdown-menu__item'
                onClick={() => handleNavigate('/settings')}
            >
                <SettingOutlined /> Cài đặt
            </div>

            <div className='jfh-dropdown-divider'></div>

            <div
                className='jfh-dropdown-menu__item jfh-dropdown-menu__item--danger'
                onClick={handleLogout}
            >
                <LogoutOutlined /> Đăng xuất
            </div>
        </div>
    );

    // City Menu Dropdown
    const renderCityMenu = () => (
        <div className='jfh-dropdown-menu jfh-dropdown-menu--cities'>
            <div className='jfh-dropdown-menu__search'>
                <Input
                    placeholder='Tìm kiếm tỉnh thành...'
                    prefix={<SearchOutlined />}
                    size='small'
                    value={citySearchTerm}
                    onChange={(e) => setCitySearchTerm(e.target.value)}
                />
            </div>
            {filteredCities.map((city) => (
                <div
                    key={city.id}
                    className={`jfh-dropdown-menu__item jfh-dropdown-menu__item--city ${
                        selectedCity === city.name
                            ? 'jfh-dropdown-menu__item--selected'
                            : ''
                    }`}
                    onClick={() => {
                        setSelectedCity(city.name);
                        setCityDropdownOpen(false);
                        setCitySearchTerm('');
                    }}
                >
                    <div className='jfh-city-item'>
                        <span className='jfh-city-item__name'>
                            <EnvironmentOutlined /> {city.name}
                        </span>
                        <span className='jfh-city-item__count'>
                            {city.count.toLocaleString()} việc làm
                        </span>
                    </div>
                </div>
            ))}
            <div className='jfh-dropdown-divider'></div>
            <div
                className='jfh-dropdown-menu__item jfh-dropdown-menu__item--all'
                onClick={() => {
                    setSelectedCity('Tất cả');
                    setCityDropdownOpen(false);
                    setCitySearchTerm('');
                }}
            >
                <strong>Tất cả tỉnh thành</strong>
            </div>
        </div>
    );

    return (
        <>
            {/* Top Banner */}
            <div className='jfh-banner'>
                <div className='jfh-banner__content'>
                    <span className='jfh-banner__icon'>🎯</span>
                    <span className='jfh-banner__text'>
                        Ứng tuyển 1 chạm - Mọi lúc mọi nơi
                    </span>
                    <span className='jfh-banner__highlight'>
                        JobFinderHub: Tìm Việc Nhanh
                    </span>
                    <Button className='jfh-banner__button' size='small'>
                        Tải app ngay
                    </Button>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`jfh-navbar ${
                    isScrolled ? 'jfh-navbar--scrolled' : ''
                }`}
            >
                <div className='jfh-navbar__container'>
                    {/* Logo */}
                    <div
                        className='jfh-navbar__logo'
                        onClick={() => navigate('/')}
                    >
                        <div className='jfh-navbar__logo-icon'>
                            <SearchOutlined className='jfh-navbar__logo-icon-svg' />
                            <div className='jfh-navbar__logo-icon-pulse' />
                        </div>
                        <div className='jfh-navbar__logo-text'>
                            <div className='jfh-navbar__logo-title'>
                                JobFinderHub
                            </div>
                            <div className='jfh-navbar__logo-subtitle'>
                                Đối Tác Sự Nghiệp Của Bạn
                            </div>
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className='jfh-navbar__search'>
                        <Input
                            size='large'
                            placeholder='Tìm kiếm công việc, công ty...'
                            prefix={
                                <SearchOutlined className='jfh-navbar__search-icon' />
                            }
                            suffix={
                                <div className='jfh-navbar__search-location-wrapper'>
                                    <button
                                        type='button'
                                        className='jfh-navbar__search-location'
                                        onClick={() =>
                                            setCityDropdownOpen(
                                                !cityDropdownOpen
                                            )
                                        }
                                    >
                                        <EnvironmentOutlined /> {selectedCity}{' '}
                                        <DownOutlined
                                            style={{ fontSize: '10px' }}
                                        />
                                    </button>
                                    {cityDropdownOpen && (
                                        <>
                                            <div
                                                className='jfh-dropdown-overlay'
                                                onClick={() => {
                                                    setCityDropdownOpen(false);
                                                    setCitySearchTerm('');
                                                }}
                                            />
                                            {renderCityMenu()}
                                        </>
                                    )}
                                </div>
                            }
                            className='jfh-navbar__search-input'
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className='jfh-navbar__nav'>
                        {navItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div
                                        key={item.id}
                                        className='jfh-navbar__nav-item-wrapper'
                                    >
                                        <button
                                            className={`jfh-navbar__nav-item ${
                                                activeNav === item.id
                                                    ? 'jfh-navbar__nav-item--active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setActiveNav(item.id);
                                                setJobMenuOpen(!jobMenuOpen);
                                            }}
                                        >
                                            {item.icon}
                                            <span className='jfh-navbar__nav-item-label'>
                                                {item.label}
                                            </span>
                                            <DownOutlined className='jfh-navbar__nav-item-arrow' />
                                        </button>
                                        {jobMenuOpen && (
                                            <>
                                                <div
                                                    className='jfh-dropdown-overlay'
                                                    onClick={() =>
                                                        setJobMenuOpen(false)
                                                    }
                                                />
                                                <div className='jfh-dropdown-menu'>
                                                    <div className='jfh-dropdown-menu__item jfh-dropdown-menu__header'>
                                                        <SearchOutlined />{' '}
                                                        <strong>
                                                            Tìm việc làm
                                                        </strong>
                                                    </div>
                                                    <div className='jfh-dropdown-divider'></div>
                                                    <div className='jfh-dropdown-menu__item jfh-dropdown-menu__subtitle'>
                                                        <FolderOpenOutlined />{' '}
                                                        Quản lý việc làm
                                                    </div>
                                                    <div
                                                        className='jfh-dropdown-menu__item'
                                                        onClick={() =>
                                                            setJobMenuOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <CheckOutlined /> Việc
                                                        làm đã ứng tuyển
                                                    </div>
                                                    <div
                                                        className='jfh-dropdown-menu__item'
                                                        onClick={() =>
                                                            setJobMenuOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <HeartOutlined /> Việc
                                                        làm đã lưu
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <button
                                    key={item.id}
                                    className={`jfh-navbar__nav-item ${
                                        activeNav === item.id
                                            ? 'jfh-navbar__nav-item--active'
                                            : ''
                                    }`}
                                    onClick={() => setActiveNav(item.id)}
                                >
                                    {item.icon}
                                    <span className='jfh-navbar__nav-item-label'>
                                        {item.label}
                                    </span>
                                    {item.badge && (
                                        <span className='jfh-navbar__nav-item-badge'>
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className='jfh-navbar__actions'>
                        {/* Theme Toggle */}
                        <button
                            className='jfh-navbar__action-btn jfh-navbar__action-btn--theme'
                            onClick={toggleTheme}
                            aria-label='Toggle theme'
                        >
                            {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                        </button>

                        {/* Notification - chỉ hiển thị khi đã đăng nhập */}
                        {isAuthenticated && (
                            <Badge
                                count={5}
                                className='jfh-navbar__notification'
                            >
                                <button className='jfh-navbar__action-btn'>
                                    <BellOutlined />
                                </button>
                            </Badge>
                        )}

                        {/* User Menu hoặc Login Button */}
                        {isAuthenticated ? (
                            <div className='jfh-navbar__user-wrapper'>
                                <button
                                    className='jfh-navbar__user-logged'
                                    onClick={() =>
                                        setUserMenuOpen(!userMenuOpen)
                                    }
                                >
                                    <Avatar
                                        size={36}
                                        icon={<UserOutlined />}
                                        src={user?.avatar}
                                        className='jfh-navbar__user-avatar'
                                    />
                                    <div className='jfh-navbar__user-info-inline'>
                                        <span className='jfh-navbar__user-name-inline'>
                                            {user?.fullName}
                                        </span>
                                        <span className='jfh-navbar__user-role'>
                                            {getRoleDisplay(user?.role)}
                                        </span>
                                    </div>
                                    <DownOutlined
                                        style={{ fontSize: '12px' }}
                                    />
                                </button>

                                {/* User Dropdown */}
                                {userMenuOpen && (
                                    <>
                                        <div
                                            className='jfh-dropdown-overlay'
                                            onClick={() =>
                                                setUserMenuOpen(false)
                                            }
                                        />
                                        {renderUserMenu()}
                                    </>
                                )}
                            </div>
                        ) : (
                            <Button
                                type='primary'
                                icon={<UserOutlined />}
                                className='jfh-navbar__login-btn'
                                onClick={() => navigate('/auth/login')}
                            >
                                <span className='jfh-navbar__user-text'>
                                    Đăng nhập
                                </span>
                            </Button>
                        )}

                        {/* Recruiter Button */}
                        <Button
                            type='primary'
                            icon={<TeamOutlined />}
                            className='jfh-navbar__recruiter-btn'
                            onClick={() => navigate('/recruiter')}
                        >
                            <span className='jfh-navbar__recruiter-text'>
                                Nhà tuyển dụng
                            </span>
                        </Button>

                        {/* Post Job Button - chỉ hiển thị khi đã đăng nhập */}
                        {isAuthenticated && (
                            <Button
                                type='primary'
                                icon={<PlusOutlined />}
                                className='jfh-navbar__post-btn'
                                onClick={() => navigate('/post-job')}
                            >
                                <span className='jfh-navbar__post-text'>
                                    Đăng tin
                                </span>
                            </Button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            className='jfh-navbar__mobile-toggle'
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            aria-label='Toggle menu'
                        >
                            {isMobileMenuOpen ? (
                                <CloseOutlined />
                            ) : (
                                <MenuOutlined />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className='jfh-navbar__mobile-search'>
                    <Input
                        placeholder='Tìm kiếm...'
                        prefix={<SearchOutlined />}
                        className='jfh-navbar__mobile-search-input'
                    />
                </div>

                {/* Mobile Menu */}
                <div
                    className={`jfh-navbar__mobile-menu ${
                        isMobileMenuOpen ? 'jfh-navbar__mobile-menu--open' : ''
                    }`}
                >
                    {/* Mobile User Info */}
                    <div className='jfh-navbar__mobile-section'>
                        {isAuthenticated && (
                            <div className='jfh-navbar__mobile-user'>
                                <Avatar
                                    size={48}
                                    icon={<UserOutlined />}
                                    src={user?.avatar}
                                />
                                <div className='jfh-navbar__mobile-user-info'>
                                    <div className='jfh-navbar__mobile-user-name'>
                                        {user?.fullName}
                                    </div>
                                    <div className='jfh-navbar__mobile-user-email'>
                                        {user?.email}
                                    </div>
                                </div>
                            </div>
                        )}

                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`jfh-navbar__mobile-item ${
                                    activeNav === item.id
                                        ? 'jfh-navbar__mobile-item--active'
                                        : ''
                                }`}
                                onClick={() => {
                                    setActiveNav(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                                {item.badge && (
                                    <span className='jfh-navbar__mobile-item-badge'>
                                        {item.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Actions */}
                    <div className='jfh-navbar__mobile-section jfh-navbar__mobile-section--actions'>
                        {isAuthenticated ? (
                            <>
                                <Button
                                    size='large'
                                    icon={<DashboardOutlined />}
                                    className='jfh-navbar__mobile-btn'
                                    block
                                    onClick={() => handleNavigate('/dashboard')}
                                >
                                    Dashboard
                                </Button>
                                <Button
                                    size='large'
                                    icon={<SettingOutlined />}
                                    className='jfh-navbar__mobile-btn'
                                    block
                                    onClick={() => handleNavigate('/settings')}
                                >
                                    Cài đặt
                                </Button>
                                <Button
                                    type='primary'
                                    danger
                                    size='large'
                                    icon={<LogoutOutlined />}
                                    className='jfh-navbar__mobile-btn jfh-navbar__mobile-btn--logout'
                                    block
                                    onClick={handleLogout}
                                >
                                    Đăng xuất
                                </Button>
                            </>
                        ) : (
                            <Button
                                type='primary'
                                size='large'
                                icon={<UserOutlined />}
                                className='jfh-navbar__mobile-btn'
                                block
                                onClick={() => handleNavigate('/auth/login')}
                            >
                                Đăng nhập / Đăng ký
                            </Button>
                        )}
                        <Button
                            type='primary'
                            size='large'
                            icon={<TeamOutlined />}
                            className='jfh-navbar__mobile-btn jfh-navbar__mobile-btn--recruiter'
                            block
                            onClick={() => handleNavigate('/recruiter')}
                        >
                            Dành cho Nhà tuyển dụng
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
