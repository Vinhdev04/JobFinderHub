import React from 'react';
import { Card, Row, Col } from 'antd';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import '../styles/dashboard.css';

const ChartSection = () => {
  // Dữ liệu cho biểu đồ đường - Thống kê công việc theo tháng
  const jobTrendData = [
    { month: 'T1', jobs: 65, applications: 120 },
    { month: 'T2', jobs: 78, applications: 145 },
    { month: 'T3', jobs: 90, applications: 178 },
    { month: 'T4', jobs: 81, applications: 160 },
    { month: 'T5', jobs: 95, applications: 190 },
    { month: 'T6', jobs: 110, applications: 220 },
    { month: 'T7', jobs: 125, applications: 250 },
  ];

  // Dữ liệu cho biểu đồ cột - Công việc theo ngành nghề
  const jobsByCategoryData = [
    { category: 'IT', count: 234 },
    { category: 'Marketing', count: 156 },
    { category: 'Sales', count: 189 },
    { category: 'Design', count: 98 },
    { category: 'Finance', count: 123 },
    { category: 'HR', count: 87 },
  ];

  // Dữ liệu cho biểu đồ tròn - Trạng thái công việc
  const jobStatusData = [
    { name: 'Đang tuyển', value: 456, color: '#52c41a' },
    { name: 'Chờ duyệt', value: 123, color: '#faad14' },
    { name: 'Đã đóng', value: 234, color: '#ff4d4f' },
    { name: 'Nháp', value: 87, color: '#8c8c8c' },
  ];

  // Dữ liệu cho biểu đồ area - Người dùng mới
  const newUsersData = [
    { date: '01/11', candidates: 45, employers: 12 },
    { date: '05/11', candidates: 52, employers: 15 },
    { date: '10/11', candidates: 68, employers: 18 },
    { date: '15/11', candidates: 75, employers: 22 },
    { date: '20/11', candidates: 89, employers: 25 },
    { date: '25/11', candidates: 95, employers: 28 },
    { date: '30/11', candidates: 112, employers: 32 },
  ];

  return (
    <div className="chart-section">
      <Row gutter={[24, 24]}>
        {/* Biểu đồ đường - Xu hướng công việc */}
        <Col xs={24} lg={16}>
          <Card 
            title="Xu hướng công việc & ứng tuyển" 
            className="chart-card"
            bordered={false}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={jobTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip 
                  contentStyle={{ 
                    background: '#fff', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="jobs" 
                  stroke="#1890ff" 
                  strokeWidth={3}
                  name="Công việc"
                  dot={{ fill: '#1890ff', r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="applications" 
                  stroke="#52c41a" 
                  strokeWidth={3}
                  name="Đơn ứng tuyển"
                  dot={{ fill: '#52c41a', r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Biểu đồ tròn - Trạng thái công việc */}
        <Col xs={24} lg={8}>
          <Card 
            title="Trạng thái công việc" 
            className="chart-card"
            bordered={false}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jobStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {jobStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Biểu đồ cột - Công việc theo ngành */}
        <Col xs={24} lg={12}>
          <Card 
            title="Công việc theo ngành nghề" 
            className="chart-card"
            bordered={false}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobsByCategoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="category" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip 
                  contentStyle={{ 
                    background: '#fff', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} 
                />
                <Bar 
                  dataKey="count" 
                  fill="#1890ff" 
                  radius={[8, 8, 0, 0]}
                  name="Số lượng"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Biểu đồ area - Người dùng mới */}
        <Col xs={24} lg={12}>
          <Card 
            title="Người dùng mới đăng ký" 
            className="chart-card"
            bordered={false}
          >
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={newUsersData}>
                <defs>
                  <linearGradient id="colorCandidates" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1890ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1890ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEmployers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#52c41a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#52c41a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip 
                  contentStyle={{ 
                    background: '#fff', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} 
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="candidates" 
                  stroke="#1890ff" 
                  fillOpacity={1} 
                  fill="url(#colorCandidates)"
                  name="Ứng viên"
                />
                <Area 
                  type="monotone" 
                  dataKey="employers" 
                  stroke="#52c41a" 
                  fillOpacity={1} 
                  fill="url(#colorEmployers)"
                  name="Nhà tuyển dụng"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChartSection;