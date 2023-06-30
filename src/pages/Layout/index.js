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
              theme="dark"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="1">
                数据概览
              </Menu.Item>
              <Menu.Item icon={<HddOutlined />} key="2">
                内容管理
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="3">
                发布文章
              </Menu.Item>
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
