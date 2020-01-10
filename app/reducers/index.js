import { combineReducers } from 'redux'
import * as credentialsReducer from './credentials'
import * as authReducer from './auth'

export default combineReducers(Object.assign(
  credentialsReducer,
  authReducer
))
