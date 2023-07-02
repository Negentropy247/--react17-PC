import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn'
import locale from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
