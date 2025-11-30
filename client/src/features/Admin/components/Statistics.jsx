import React from 'react';
import { Card, Statistic, Progress } from 'antd';
import {
  FileTextOutlined,
  UserOutlined,
  BankOutlined,
  FileDoneOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import '../styles/dashboard.css';

const Statistics = () => {
  const stats = [
    {
      title: 'Tổng công việc',
      value: 1234,
      color: '#1890ff',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      increase: 12,
      isPositive: true,
      icon: <FileTextOutlined />,
      target: 1500,
    },
    {
      title: 'Ứng viên',
      value: 5678,
      color: '#52c41a',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      increase: 8,
      isPositive: true,
      icon: <UserOutlined />,
      target: 6000,
    },
    {
      title: 'Công ty',
      value: 234,
      color: '#faad14',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      increase: 5,
      isPositive: true,
      icon: <BankOutlined />,
      target: 300,
    },
    {
      title: 'Đơn ứng tuyển',
      value: 8901,
      color: '#eb2f96',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      increase: 15,
      isPositive: true,
      icon: <FileDoneOutlined />,
      target: 10000,
    },
  ];

  return (
    <div className="statistics-container-modern">
      {stats.map((stat, index) => {
        const progress = (stat.value / stat.target) * 100;
        
        return (
          <Card key={index} className="stat-card-modern" bordered={false}>
            <div className="stat-card-gradient" style={{ background: stat.bgColor }}>
              <div className="stat-icon-modern">
                {stat.icon}
              </div>
            </div>
            
            <div className="stat-content-modern">
              <div className="stat-header-modern">
                <span className="stat-title-modern">{stat.title}</span>
                <div className={`stat-trend ${stat.isPositive ? 'positive' : 'negative'}`}>
                  {stat.isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                  <span>{stat.increase}%</span>
                </div>
              </div>
              
              <div className="stat-value-modern">
                <Statistic
                  value={stat.value}
                  valueStyle={{ 
                    color: '#262626', 
                    fontSize: '32px', 
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                  }}
                />
              </div>
              
              <div className="stat-progress-modern">
                <Progress 
                  percent={progress} 
                  showInfo={false}
                  strokeColor={{
                    '0%': stat.color,
                    '100%': stat.color,
                  }}
                  trailColor="#f0f0f0"
                  strokeWidth={6}
                />
                <span className="stat-target-text">
                  Mục tiêu: {stat.target.toLocaleString()}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Statistics;