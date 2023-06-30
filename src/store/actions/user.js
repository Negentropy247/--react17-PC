import request from '@/utils/request'
import { GET_USER_INFO } from '../constants'

export function getUserInfo() {
  return async dispatch => {
    const res = await request.get('/user/profile')
    dispatch({
      type: GET_USER_INFO,
      payload: res.data.data
    })
  }
}
