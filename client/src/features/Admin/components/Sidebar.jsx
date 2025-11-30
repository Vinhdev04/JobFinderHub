import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  BankOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import '../styles/sidebar.css';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '2',
      icon: <FileTextOutlined />,
      label: 'Quản lý công việc',
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Quản lý người dùng',
      children: [
        { key: '3-1', label: 'Ứng viên' },
        { key: '3-2', label: 'Nhà tuyển dụng' },
      ],
    },
    {
      key: '4',
      icon: <BankOutlined />,
      label: 'Công ty',
    },
    {
      key: '5',
      icon: <SettingOutlined />,
      label: 'Cài đặt',
    },
  ];

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      className="admin-sidebar"
    >
      <div className="sidebar-logo">
        {collapsed ? 'JFH' : 'JobFinderHub'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuItems}
        className="sidebar-menu"
      />
    </Sider>
  );
};

export default Sidebar;