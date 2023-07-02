import request from '@/utils/request'
import { GET_CHANNEL_LIST } from '../constants'
export const getChannelList = () => {
  return async dispatch => {
    const res = await request.get('/channels')
    dispatch({
      type: GET_CHANNEL_LIST,
      payload: res.data.data.channels
    })
  }
}
