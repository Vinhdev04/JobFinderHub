import React from 'react';
import { Card, Table, Tag, Space, Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import '../styles/dashboard.css';

const RecentJobsTable = () => {
  const columns = [
    {
      title: 'Tiêu đề công việc',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <span className="job-title">{text}</span>,
    },
    {
      title: 'Công ty',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Địa điểm',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Mức lương',
      dataIndex: 'salary',
      key: 'salary',
      render: (salary) => <span className="salary-text">{salary}</span>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const statusConfig = {
          active: { color: 'green', text: 'Đang tuyển' },
          pending: { color: 'orange', text: 'Chờ duyệt' },
          closed: { color: 'red', text: 'Đã đóng' },
        };
        const config = statusConfig[status];
        return <Tag color={config.color}>{config.text}</Tag>;
      },
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" icon={<EyeOutlined />} size="small">
            Xem
          </Button>
          <Button type="link" icon={<EditOutlined />} size="small">
            Sửa
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} size="small">
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions',
      location: 'Hà Nội',
      salary: '20-30 triệu',
      status: 'active',
      date: '2024-11-28',
    },
    {
      key: '2',
      title: 'Backend Engineer',
      company: 'Digital Ventures',
      location: 'TP.HCM',
      salary: '25-35 triệu',
      status: 'active',
      date: '2024-11-27',
    },
    {
      key: '3',
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'Đà Nẵng',
      salary: '15-25 triệu',
      status: 'pending',
      date: '2024-11-26',
    },
    {
      key: '4',
      title: 'Full Stack Developer',
      company: 'Startup Hub',
      location: 'Hà Nội',
      salary: '30-40 triệu',
      status: 'closed',
      date: '2024-11-25',
    },
    {
      key: '5',
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'TP.HCM',
      salary: '28-38 triệu',
      status: 'active',
      date: '2024-11-24',
    },
  ];

  return (
    <Card title="Công việc gần đây" className="jobs-table-card" bordered={false}>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ 
          pageSize: 5,
          showTotal: (total) => `Tổng ${total} công việc`,
        }} 
        className="jobs-table"
      />
    </Card>
  );
};

export default RecentJobsTable;