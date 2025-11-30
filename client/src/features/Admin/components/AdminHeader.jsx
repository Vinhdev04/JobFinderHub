import React from 'react';
import { Layout, Input, Button, Badge, Avatar, Dropdown, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import '../styles/header.css';

const { Header } = Layout;

const AdminHeader = ({ collapsed, setCollapsed }) => {
  // Menu cho user dropdown
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Thông tin cá nhân',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Cài đặt',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      danger: true,
    },
  ];

  return (
    <Header className="admin-header-modern">
      <div className="header-left">
        <div 
          className="trigger-icon-modern"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        
        <div className="header-search-wrapper">
          <Input
            placeholder="Tìm kiếm công việc, ứng viên, công ty..."
            prefix={<SearchOutlined className="search-icon" />}
            className="header-search-modern"
            size="large"
          />
        </div>
      </div>

      <div className="header-right">
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          className="add-job-btn-modern"
          size="large"
        >
          Đăng tin tuyển dụng
        </Button>

        <Badge count={5} className="notification-badge-modern">
          <div className="notification-icon-wrapper">
            <BellOutlined className="notification-icon-modern" />
          </div>
        </Badge>

        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Space className="user-profile-wrapper">
            <Avatar 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" 
              size={40}
              className="user-avatar-modern"
            />
            <div className="user-info">
              <div className="user-name">Admin User</div>
              <div className="user-role">Quản trị viên</div>
            </div>
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AdminHeader;