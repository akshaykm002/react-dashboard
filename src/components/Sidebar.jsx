import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  GlobalOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        background: '#001529',
      }}
    >
      <div
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        Dashboard
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Overview',
          },
          {
            key: '2',
            icon: <BarChartOutlined />,
            label: 'Insights',
            children: [
              { key: '2-1', label: 'By Intensity' },
              { key: '2-2', label: 'By Likelihood' },
              { key: '2-3', label: 'By Relevance' },
            ],
          },
          {
            key: '3',
            icon: <LineChartOutlined />,
            label: 'Trends',
            children: [
              { key: '3-1', label: 'Yearly Trends' },
              { key: '3-2', label: 'Topic Trends' },
            ],
          },
          {
            key: '4',
            icon: <PieChartOutlined />,
            label: 'Distributions',
            children: [
              { key: '4-1', label: 'By Country' },
              { key: '4-2', label: 'By Region' },
              { key: '4-3', label: 'By City' },
            ],
          },
          {
            key: '5',
            icon: <GlobalOutlined />,
            label: 'Geo Visualizations',
          },
          {
            key: '6',
            icon: <SettingOutlined />,
            label: 'Settings',
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
