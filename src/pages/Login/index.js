import React from 'react'
import { Card } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'

export default function Login() {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
      </Card>
    </div>
  )
}
