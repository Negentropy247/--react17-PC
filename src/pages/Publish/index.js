import React, { useState } from 'react'
import { Card, Breadcrumb, Form, Input, Select, Button, Space, Radio, Upload } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
// import { useChannels } from '@/hooks'
import Channel from '@/components/channel'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { PlusOutlined } from '@ant-design/icons'

export default function Publish() {
  // const channels = useChannels()
  const onFinish = value => {}
  const [fileList, setFileList] = useState([{}])
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
      >
        <Form
          initialValues={{ content: '', type: 1 }}
          onFinish={onFinish}
          size="large"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item label="标题">
            <Input style={{ width: 400 }} placeholder="请输入文章的标题"></Input>
          </Form.Item>
          <Form.Item label="频道">
            <Channel />
          </Form.Item>
          <Form.Item label="封面" name="type">
            <Radio.Group>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Upload listType="picture-card" fileList={fileList}>
              <PlusOutlined />
            </Upload>
          </Form.Item>
          <Form.Item label="内容" name="content">
            <ReactQuill></ReactQuill>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                发布文章
              </Button>
              <Button>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
