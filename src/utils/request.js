// 封装axios
import axios from 'axios'
import { getToken } from './storage'
import { message } from 'antd'
import store from '@/store'
import { logout } from '@/store/actions/login'
import history from '@/utils/history'

const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})

// 配置请求拦截器和响应拦截器
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getToken()
    if (token) {
      // 添加token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    if (!error.response) {
      // console.log(history)
      message.error('没网啦~但你还是很优秀！')
      return Promise.reject(error)
    }
    if (error.response.status === 401) {
      // token过期
      message.error('上一次认可自己已经过期，再次继续认可自己吧！你太棒了！')
      // 清除token
      store.dispatch(logout())
      // 跳转到登录页
      history.replace({
        pathname: '/login',
        state: {
          from: history.location.pathname
        }
      })
    }
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
