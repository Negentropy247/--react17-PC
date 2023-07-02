import { GET_ARTICLE_LIST, GET_CHANNEL_LIST } from '../constants'

const initValue = {
  channels: [],
  articles: {}
}
export default function article(state = initValue, action) {
  if (action.type === GET_CHANNEL_LIST) {
    return {
      ...state,
      channels: action.payload
    }
  }
  if (action.type === GET_ARTICLE_LIST) {
    return {
      ...state,
      articles: action.payload
    }
  }
  return state
}
