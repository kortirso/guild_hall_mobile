import * as credentialsActions from './credentials'
import * as authActions from './auth'
import * as activitiesActions from './activities'

export const ActionCreators = Object.assign(
  credentialsActions,
  authActions,
  activitiesActions
)
