import * as types from './types'

export function fetchCredentials(credentials) {
  return (dispatch, getState) => {
    dispatch(setCredentials({email: credentials.email, password: credentials.password, remember: credentials.remember}))
  }
}

export function setCredentials(credentials) {
  return {
    type: types.LOAD_CREDENTIALS,
    credentials
  }
}