import * as credentialsActions from './credentials'
import * as authActions from './auth'

export const ActionCreators = Object.assign(
  credentialsActions,
  authActions
)
