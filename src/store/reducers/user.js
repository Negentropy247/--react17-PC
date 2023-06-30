import { GET_USER_INFO } from '../constants'

export default function user(state = {}, action) {
  if (action.type === GET_USER_INFO) {
    return action.payload
  }
  return state
}
