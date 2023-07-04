import request from '@/utils/request'
import { GET_ARTICLE_LIST, GET_CHANNEL_LIST } from '../constants'
export const getChannelList = () => {
  return async dispatch => {
    const res = await request.get('/channels')
    dispatch({
      type: GET_CHANNEL_LIST,
      payload: res.data.data.channels
    })
  }
}
export const getArticleList = params => {
  return async dispatch => {
    const res = await request({
      url: '/mp/articles',
      params
    })
    dispatch({
      type: GET_ARTICLE_LIST,
      payload: res.data.data
    })
  }
}
// 删除文章
export const delArticle = id => {
  return async () => {
    await request({
      method: 'delete',
      url: `/mp/articles/${id}`
    })
  }
}
