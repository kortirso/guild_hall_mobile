import { combineReducers } from 'redux'
import * as credentialsReducer from './credentials'
import * as authReducer from './auth'
import * as activitiesReducer from './activities'

export default combineReducers(Object.assign(
  credentialsReducer,
  authReducer,
  activitiesReducer
))
