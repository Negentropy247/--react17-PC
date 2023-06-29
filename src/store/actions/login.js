import request from '@/utils/request'
import { LOGIN } from '@/store/constants'
export const login = payload => {
  return async dispatch => {
    const res = await request({
      method: 'post',
      url: 'authorizations',
      data: payload
    })
    dispatch({
      type: LOGIN,
      payload: res.data.data.token
    })
  }
}
