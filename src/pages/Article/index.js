import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Breadcrumb, Button, Card, DatePicker, Form, Radio, Select } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList } from '@/store/actions/article'

export default function Article() {
  const dispatch = useDispatch()
  const channels = useSelector(state => state.article.channels)
  useEffect(() => {
    dispatch(getChannelList())
  }, [])
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
        <Form initialValues={{ status: -1 }}>
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
          <Form.Item label="日期 ">
            <DatePicker.RangePicker></DatePicker.RangePicker>
          </Form.Item>
          <Form.Item>
            <Button type="primary">筛选</Button>
          </Form.Item>
        </Form>
        {/* 表格 */}
      </Card>
    </div>
  )
}
