import { GET_CHANNEL_LIST } from '../constants'

const initValue = {
  channels: []
}
export default function article(state = initValue, action) {
  if (action.type === GET_CHANNEL_LIST) {
    return {
      ...state,
      channels: action.payload
    }
  }
  return state
}
