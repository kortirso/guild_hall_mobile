import * as types from './types'
import Api from '../lib/api'

export function fetchActivities(params, accessToken) {
  return (dispatch, getState) => {
    let url = 'v2/activities.json'
    if (params !== null) url = `${url}?${params}`
    return Api.get(url, null, accessToken).then(resp => {
      if (resp.errors === undefined) {
        return resp.activities.data
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function setActivities(activities) {
  return {
    type: types.LOAD_ACTIVITIES,
    activities
  }
}