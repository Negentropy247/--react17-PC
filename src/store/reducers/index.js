import { combineReducers } from 'redux'
import login from './login.js'
import user from './user.js'
import article from './article.js'

const rootReducer = combineReducers({
  login,
  user,
  article
})

export default rootReducer
