import * as types from './types'
import Api from '../lib/api'

export function fetchCharacters(params, accessToken) {
  return (dispatch, getState) => {
    let url = 'v2/characters.json'
    if (params !== null) url = `${url}?${params}`
    return Api.get(url, null, accessToken).then(resp => {
      if (resp.errors === undefined) {
        return resp.characters.data
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function setCharacters(characters) {
  return {
    type: types.LOAD_CHARACTERS,
    characters
  }
}