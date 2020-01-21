import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const INITIAL_STATE = []

export const characters = createReducer(INITIAL_STATE, {
  [types.LOAD_CHARACTERS](state, action) {
    return action.characters
  }
})
