import request from '@/utils/request'
import { LOGIN, LOGOUT } from '@/store/constants'
import { setToken, removeToken } from '@/utils/storage'
export const login = payload => {
  return async dispatch => {
    const res = await request({
      method: 'post',
      url: 'authorizations',
      data: payload
    })
    const token = res.data.data.token
    // 储存到本地
    setToken(token)
    // redux中存储
    dispatch({
      type: LOGIN,
      payload: token
    })
  }
}

export const logout = () => {
  return dispatch => {
    removeToken()
    dispatch({
      type: LOGOUT
    })
  }
}
