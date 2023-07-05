import React, { useEffect } from 'react'
import { Card, Breadcrumb, Form, Input, Select, Button, Space } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList } from '@/store/actions/article'

export default function Publish() {
  const channels = useSelector(state => state.article.channels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelList())
  }, [])
  return (
    <div className={styles.root}>
      {/* 面包屑 */}
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      ></Card>
      {/* 表格 */}
      <Form size="large" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
        <Form.Item label="标题">
          <Input style={{ width: 400 }} placeholder="请输入文章的标题"></Input>
        </Form.Item>
        <Form.Item label="频道">
          <Select style={{ width: 120 }} allowClear placeholder="请选择频道">
            {channels.map(item => (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="封面"></Form.Item>
        <Form.Item label="内容"></Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Space>
            <Button type="primary">发布文章</Button>
            <Button>存入草稿</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
