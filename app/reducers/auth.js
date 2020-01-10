import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const INITIAL_STATE = {
  access_token: null,
  user: null,
  expires_at: null
}

export const auth = createReducer(INITIAL_STATE, {
  [types.SET_USER](state, action) {
    return action.auth
  }
})
