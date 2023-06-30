import React from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Layout, Menu } from 'antd'
import {
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  HddOutlined,
  EditOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function MyLayout() {
  return (
    <div className={styles.root}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* 右侧内容 */}
          <div className="profile">
            <span>黑马先锋</span>
            <span>
              <LogoutOutlined></LogoutOutlined>
              退出
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
