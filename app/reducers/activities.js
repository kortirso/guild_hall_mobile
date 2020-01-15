import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const INITIAL_STATE = []

export const activities = createReducer(INITIAL_STATE, {
  [types.LOAD_ACTIVITIES](state, action) {
    return action.activities
  }
})
