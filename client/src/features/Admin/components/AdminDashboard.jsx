import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import Statistics from './Statistics';
import ChartSection from './ChartSection';
import RecentJobsTable from './RecentJobsTable';
import '../styles/dashboard.css';

const { Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="admin-layout">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="admin-content">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Dashboard</h1>
              <p className="dashboard-subtitle">Chào mừng trở lại! Đây là tổng quan hệ thống của bạn.</p>
            </div>
          </div>
          <Statistics />
          <ChartSection />
          <RecentJobsTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;