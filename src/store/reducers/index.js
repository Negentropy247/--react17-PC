import { combineReducers } from 'redux'
import login from './login.js'
import user from './user.js'

const rootReducer = combineReducers({
  login,
  user
})

export default rootReducer
