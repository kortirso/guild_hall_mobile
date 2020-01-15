import * as types from './types'
import Api from '../lib/api'

export function loginUser(params) {
  return (dispatch, getState) => {
    return Api.post('user_token.json', params, null).then(resp => {
      if (resp.errors === undefined) {
        dispatch(setUser(resp))
        return resp
      } else console.log(resp)
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function logOut() {
  return (dispatch, getState) => {
    dispatch(setUser({ accessToken: null, user: null, expiresAt: null }))
  }
}

export function setUser(auth) {
  return {
    type: types.SET_USER,
    auth
  }
}
