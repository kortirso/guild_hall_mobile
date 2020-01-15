import * as types from './types'
import Api from '../lib/api'

export function loginUser(params) {
  return (dispatch, getState) => {
    return Api.post('v2/user_token.json', params, null).then(resp => {
      if (resp.errors === undefined) {
        dispatch(setUser(resp))
        return resp
      } else dispatch(logOut())
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function logOut() {
  return (dispatch, getState) => {
    dispatch(setUser({ access_token: null, user: null, expires_at: null }))
  }
}

export function setUser(auth) {
  return {
    type: types.SET_USER,
    auth
  }
}
