import React, { useState } from 'react'
import { Card, Button, Checkbox, Form, Input, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useDispatch } from 'react-redux'
import { login } from '@/store/actions/login'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Login() {
  // 当表单校验通过，就执行onFinish，并会携带数据
  const dispatch = useDispatch()
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const onFinish = async values => {
    setLoading(true)
    // console.log('Success:', values)
    // 发送请求进行登录
    try {
      await dispatch(login(values))
      message.success('登录成功', 1, () => {
        history.push('/home')
      })
    } catch (error) {
      // console.log(error)
      message.error(error.response.data.message, 1, () => {
        setLoading(false)
      })
    }
  }
  return (
    <div className="login">
      <Card className="login-container">
        {/* 图片渲染 */}
        <img className="login-logo" src={logo} alt="" />

        {/* 表单渲染 */}
        <Form
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed} 检验不通过不需要做什么
          autoComplete="off"
          size="large"
          validateTrigger={['onChange', 'onBlur']}
          initialValues={{
            mobile: '13911111111',
            code: '246810'
            // agree: false
          }}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: 'true',
                message: '手机号不能为空'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误'
              }
            ]}
          >
            <Input placeholder="输入手机号" />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              {
                required: 'true',
                message: '验证码不能为空'
              },
              {
                pattern: /^\d{6}$/,
                message: '验证码格式错误'
              }
            ]}
          >
            <Input placeholder="输入验证码" />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => {
                  if (value === true) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('请一定充分认可并相信你自己！!'))
                  }
                }
              }
            ]}
          >
            <Checkbox>你真的超努力超优秀</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              进入年薪25w星球
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
