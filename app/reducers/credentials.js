import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const INITIAL_STATE = {
  email: null,
  password: ''
}

export const credentials = createReducer(INITIAL_STATE, {
  [types.LOAD_CREDENTIALS](state, action) {
    return action.credentials
  }
})
