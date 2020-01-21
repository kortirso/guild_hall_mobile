import * as credentialsActions from './credentials'
import * as authActions from './auth'
import * as activitiesActions from './activities'
import * as charactersActions from './characters'

export const ActionCreators = Object.assign(
  credentialsActions,
  authActions,
  activitiesActions,
  charactersActions
)
