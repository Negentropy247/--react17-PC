import React from 'react'
import { Card, Breadcrumb, Form, Input, Select, Button, Space } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
// import { useChannels } from '@/hooks'
import Channel from '@/components/channel'

export default function Publish() {
  // const channels = useChannels()
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
          <Channel />
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
