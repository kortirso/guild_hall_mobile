import { combineReducers } from 'redux'
import * as credentialsReducer from './credentials'

export default combineReducers(Object.assign(
  credentialsReducer
))
