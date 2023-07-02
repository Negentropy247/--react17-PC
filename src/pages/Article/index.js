import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Button, Card, DatePicker, Form, Radio, Select, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleList, getChannelList } from '@/store/actions/article'

const STATUS = [
  { id: -1, title: '全部', color: 'magenta' },
  { id: 0, title: '草稿', color: 'red' },
  { id: 1, title: '待审核', color: 'volcano' },
  { id: 2, title: '审核通过', color: 'green' },
  { id: 3, title: '审核失败', color: 'gold' }
]

const columns = [
  {
    title: '封面',
    dataIndex: 'name'
  },
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: status => {
      const obj = STATUS.find(item => item.id === status)
      return <Tag color={obj.color}>{obj.title}</Tag>
    }
  },
  {
    title: '时间',
    dataIndex: 'pubdate'
  },
  {
    title: '阅读数',
    dataIndex: 'read_count'
  },
  {
    title: '评论数',
    dataIndex: 'comment_count'
  },
  {
    title: '点赞数',
    dataIndex: 'like_count'
  },
  {
    title: '操作'
  }
]

export default function Article() {
  const dispatch = useDispatch()
  const channels = useSelector(state => state.article.channels)
  const articles = useSelector(state => state.article.articles)
  useEffect(() => {
    dispatch(getChannelList())
    dispatch(getArticleList())
  }, [])

  const onFinish = values => {
    console.log(values)
  }

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={'/home'}>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        {/* 表单 */}
        <Form initialValues={{ status: -1 }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              {STATUS.map(item => (
                <Radio key={item.id} value={item.id}>
                  {item.title}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道" name="channel_id">
            <Select style={{ width: 120 }} placeholder="请选择频道">
              {channels.map(item => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="日期" name="date">
            <DatePicker.RangePicker></DatePicker.RangePicker>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 表格 */}
      <Card title={`根据筛选结果共查询到${articles.total_count}条数据`} style={{ marginTop: 10 }}>
        <Table dataSource={articles.results} columns={columns} />
      </Card>
    </div>
  )
}
