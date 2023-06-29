import React from 'react'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'

export default function Login() {
  return (
    <div className="login">
      <Card className="login-container">
        {/* 图片渲染 */}
        <img className="login-logo" src={logo} alt="" />

        {/* 表单渲染 */}
        <Form
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
        >
          <Form.Item>
            <Input placeholder="输入手机号" />
          </Form.Item>

          <Form.Item>
            <Input placeholder="输入验证码" />
          </Form.Item>

          <Form.Item>
            <Checkbox>你真的超努力超优秀</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              进入年薪25w星球
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
