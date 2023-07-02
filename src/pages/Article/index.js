import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Button, Card, DatePicker, Form, Radio, Select, Table } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList } from '@/store/actions/article'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]

const columns = [
  {
    title: '封面',
    key: 'name'
  },
  {
    title: '标题',
    key: 'age'
  },
  {
    title: '状态',
    key: 'address'
  },
  {
    title: '时间',
    key: 'address'
  },
  {
    title: '阅读数',
    key: 'address'
  },
  {
    title: '评论数',
    key: 'address'
  },
  {
    title: '点赞数',
    key: 'address'
  },
  {
    title: '操作',
    key: 'address'
  }
]

export default function Article() {
  const dispatch = useDispatch()
  const channels = useSelector(state => state.article.channels)
  useEffect(() => {
    dispatch(getChannelList())
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
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
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
      <Card title="根据筛选结果共查询到000条数据" style={{ marginTop: 10 }}>
        <Table dataSource={dataSource} columns={columns} />;
      </Card>
    </div>
  )
}
