import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Select, Badge, Avatar } from 'antd';
import { 
  SearchOutlined, 
  EnvironmentOutlined, 
  CarryOutOutlined,   
  TagOutlined,
  ToolOutlined,       
  DollarOutlined,
  FireOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import './HomePage.css';

const { Option } = Select;



const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState('Tất cả');
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample data
  const featuredJobs = [
    { id: 1, title: 'Nhân Viên Tuần Tra Giao Thông', company: 'Công ty Cổ Phần Dịch Vụ Kỹ Thuật Đường Cao Tốc', salary: '8 - 12 triệu', location: 'TP.HCM, Bình Thuận, Ninh Thuận, +1', daysLeft: 30, logo: 'https://via.placeholder.com/60' },
    { id: 2, title: 'Nam - Nhân Viên Kinh Doanh Thị Trường Việc Làm', company: 'Công Ty TNHH Thương Mại Dịch Vụ Động Đồ', salary: '15 - 30 triệu', location: 'TP.HCM', daysLeft: 27, logo: 'https://via.placeholder.com/60' },
    { id: 3, title: 'Kế Toán Trưởng', company: 'Hệ Kinh Doanh Tbone Fisio 2', salary: '20 - 25 triệu', location: 'TP.HCM', daysLeft: 28, logo: 'https://via.placeholder.com/60' }
  ];

  const bestJobs = [
    { id: 1, title: 'Giám Đốc FATP - Ca Hội Việc Làm Hấp Dẫn', company: 'Công Ty TNHH QMH Computer - Tập đoàn Q...', salary: 'Thỏa thuận', location: 'Ninh Bình, Phường Mỹ Lộc', logo: 'https://via.placeholder.com/60' },
    { id: 2, title: 'Nhân Viên Sales Yêu Cầu Gửi CV Tiếng Anh', company: 'CÔNG TY TNHH PHI UNG SAI GÒN', salary: 'Thỏa thuận', location: 'Hồ Chí Minh, Phường An Khánh', logo: 'https://via.placeholder.com/60' },
    { id: 3, title: 'Nhân Viên Tư Vấn/Nhân Viên Tư Vấn Xe Tải - Nam', company: 'CÔNG TY CỔ PHẦN Ô TÔ THÁI HÒA', salary: '20 - 30 triệu', location: 'Hà Nội, Phường Từ Liêm', logo: 'https://via.placeholder.com/60' }
  ];

  const topCompanies = [
    { name: 'Viettel', jobs: 55, logo: 'https://via.placeholder.com/80/ff0000/ffffff?text=V' },
    { name: 'Vinacom', jobs: 14, logo: 'https://via.placeholder.com/80/cc0000/ffffff?text=VN' },
    { name: 'Xanh SM', jobs: 76, logo: 'https://via.placeholder.com/80/00cc66/ffffff?text=X' },
    { name: 'Mai Bao', jobs: 13, logo: 'https://via.placeholder.com/80/ff6600/ffffff?text=MB' },
    { name: 'G88', jobs: 5, logo: 'https://via.placeholder.com/80/009900/ffffff?text=G88' }
  ];

  const careerGuides = [
    { title: 'Giám sát bán hàng là gì? Mức lương Sales Supervisor có cao không?', description: 'Giám sát bán hàng là gì? Lộ trình thăng tiến và mức lương giám sát bán hàng ra sao? Tất cả sẽ được giải đáp chi tiết ngay trong bài viết sau!', image: 'https://via.placeholder.com/400x250/9b8bf4/ffffff?text=Sales' },
    { title: 'HR NEXUS #2: Xây dựng đội ngũ hiệu suất cao trong kỷ nguyên AI', description: 'Tiếp nối chuỗi sự kiện nhân sự - networking của Vieclam24h dành riêng cho cộng đồng HR cấp cao, chương trình HR NEXUS #2', image: 'https://via.placeholder.com/400x250/1a1a3e/ffffff?text=HR+AI' },
    { title: '10 công việc lý tưởng giúp trả lời câu hỏi con gái nên học ngành gì', description: 'Con gái nên học ngành gì? Con gái khi chọn nghề nghiệp phù hợp nên lưu ý điều gì? Việc làm phù hợp cho phái nữ gồm các ngành nào?', image: 'https://via.placeholder.com/400x250/4a148c/ffffff?text=Career' }
  ];

  const categories = [
    { icon: <DollarOutlined />, label: 'Bán sỉ - Bán lẻ - Quản lý cửa hàng' },
    { icon: <TagOutlined />, label: 'Bán hàng - Kinh doanh' },
    { icon: <ToolOutlined />, label: 'Marketing' },
    { icon: <ToolOutlined />, label: 'Khoa học - Kỹ thuật' },
    { icon: <DollarOutlined />, label: 'Kiểm toán' }
  ];

  const cities = ['Tất cả', 'TP.HCM', 'An Giang', 'Bà Rịa - Vũng Tàu', 'Bạc Liêu', 'Bến Tre', 'Bình Dương'];

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Tìm Việc Làm Mơ Ước Của Bạn</h1>
            <p className="hero-subtitle">Hàng nghìn cơ hội việc làm đang chờ đón bạn</p>

            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-input-wrapper">
                <SearchOutlined className="search-icon" />
                <Input placeholder="Nhập vị trí muốn ứng tuyển" className="search-input" bordered={false} />
              </div>

              <div className="search-select-wrapper">
                <CarryOutOutlined className="select-icon" />
                <Select defaultValue="Tất cả nghề nghiệp" className="search-select" bordered={false} suffixIcon={null}>
                  <Option value="all">Tất cả nghề nghiệp</Option>
                  <Option value="it">Công nghệ thông tin</Option>
                  <Option value="sales">Kinh doanh</Option>
                </Select>
              </div>

              <div className="search-select-wrapper">
                <EnvironmentOutlined className="select-icon" />
                <Select defaultValue="Tất cả tỉnh thành" className="search-select" bordered={false} suffixIcon={null}>
                  <Option value="all">Tất cả tỉnh thành</Option>
                  <Option value="hcm">TP. Hồ Chí Minh</Option>
                  <Option value="hn">Hà Nội</Option>
                </Select>
              </div>

              <Button type="primary" className="search-button">
                <SearchOutlined /> Tìm việc
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <Button className="quick-action-btn urgent">
                <FireOutlined /> Việc đi làm ngay <Badge count="MỚI" className="new-badge" />
              </Button>
              <Button className="quick-action-btn no-cv">
                <CarryOutOutlined /> Việc không cần CV <Badge count="MỚI" className="new-badge" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Card key={index} className={`category-card ${activeCategory === index ? 'active' : ''}`} hoverable onClick={() => setActiveCategory(index)}>
                <div className="category-icon">{cat.icon}</div>
                <p className="category-label">{cat.label}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button type="link" className="view-all-btn">Tất cả các ngành <RightOutlined /></Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2><FireOutlined /> Việc làm tuyển gấp</h2>
            <div className="city-tabs">
              <LeftOutlined className="scroll-arrow" />
              {cities.map(city => (
                <Button key={city} className={`city-tab ${selectedCity === city ? 'active' : ''}`} onClick={() => setSelectedCity(city)}>{city}</Button>
              ))}
              <RightOutlined className="scroll-arrow" />
            </div>
          </div>

          <div className="jobs-grid">
            {featuredJobs.map(job => (
              <Card key={job.id} className="job-card" hoverable>
                <div className="job-header">
                  <Avatar src={job.logo} size={60} />
                  <HeartOutlined className="favorite-icon" />
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="company-name">{job.company}</p>
                <div className="job-info">
                  <span className="salary"><DollarOutlined /> {job.salary}</span>
                  <span className="location"><EnvironmentOutlined /> {job.location}</span>
                </div>
                <div className="job-footer">
                  <span className="days-left"><ClockCircleOutlined /> Còn {job.daysLeft} ngày</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Jobs Section */}
      <section className="best-jobs-section">
        <div className="container">
          <div className="section-header">
            <h2>Việc làm tốt nhất</h2>
            <p className="section-subtitle">Được xuất bởi TOPPYAI</p>
          </div>

          <div className="filter-bar">
            <Select defaultValue="Địa điểm" className="filter-select">
              <Option value="all">Ngẫu Nhiên</Option>
              <Option value="hn">Hà Nội</Option>
              <Option value="hcm">TP.HCM</Option>
            </Select>
          </div>

          <div className="jobs-grid">
            {bestJobs.map(job => (
              <Card key={job.id} className="job-card best-job-card" hoverable>
                <div className="job-header">
                  <Avatar src={job.logo} size={60} />
                  <HeartOutlined className="favorite-icon" />
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="company-name">{job.company}</p>
                <div className="job-info">
                  <span className="salary">{job.salary}</span>
                  <span className="location">{job.location}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="companies-section">
        <div className="container">
          <div className="section-header">
            <h2>🏢 Công ty nổi bật</h2>
            <Button type="link" className="view-all-btn">Xem tất cả <RightOutlined /></Button>
          </div>

          <div className="companies-grid">
            {topCompanies.map((company, index) => (
              <Card key={index} className="company-card" hoverable>
                <img src={company.logo} alt={company.name} className="company-logo" />
                <p className="company-jobs">📋 {company.jobs} vị trí đang tuyển</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guides Section */}
      <section className="guides-section">
        <div className="container">
          <h2 className="section-title">Cẩm nang nghề nghiệp</h2>
          <div className="guides-grid">
            {careerGuides.map((guide, index) => (
              <Card key={index} className="guide-card" hoverable>
                <img src={guide.image} alt={guide.title} className="guide-image" />
                <div className="guide-content">
                  <h3 className="guide-title">{guide.title}</h3>
                  <p className="guide-description">{guide.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
