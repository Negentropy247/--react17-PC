import React from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Layout, Menu } from 'antd'
import { LogoutOutlined, HomeOutlined, HddOutlined, EditOutlined } from '@ant-design/icons'
import { Route, Link, Switch } from 'react-router-dom'
import Home from '../Home'
import Article from '../Article'
import Publish from '../Publish'

const { Header, Sider } = Layout

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
                <Link to="/home">数据概览</Link>
              </Menu.Item>
              <Menu.Item icon={<HddOutlined />} key="2">
                <Link to="/home/article">内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="3">
                <Link to="/home/publish">发布文章</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: ' 24px ' }}>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route path="/home/article" component={Article}></Route>
              <Route path="/home/publish" component={Publish}></Route>
            </Switch>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
