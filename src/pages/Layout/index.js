import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Layout, Menu, Popconfirm, message } from 'antd'
import { LogoutOutlined, HomeOutlined, HddOutlined, EditOutlined } from '@ant-design/icons'
import { Route, Link, Switch, useLocation, useHistory } from 'react-router-dom'
import Home from '../Home'
import Article from '../Article'
import Publish from '../Publish'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@/store/actions/user'
import { logout } from '@/store/actions/login'

const { Header, Sider } = Layout

export default function MyLayout() {
  const location = useLocation()
  const user = useSelector(state => state.user)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])
  const onConfirm = () => {
    // 清除token
    dispatch(logout())
    // 跳转到登录页
    history.push('./login')
    // 提示消息
    message.success('暂时离开一秒', 1)
  }
  return (
    <div className={styles.root}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* 右侧内容 */}
          <div className="profile">
            <span>{user.name}</span>
            <Popconfirm
              placement="bottomRight"
              title="不要离开我"
              okText="对不起，那我5秒就回来"
              cancelText="好，我不走"
              onConfirm={onConfirm}
            >
              <span>
                <LogoutOutlined></LogoutOutlined>
                退出
              </span>
            </Popconfirm>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[location.pathname]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="/home">
                <Link to="/home">数据概览</Link>
              </Menu.Item>
              <Menu.Item icon={<HddOutlined />} key="/home/article">
                <Link to="/home/article">内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/home/publish">
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
