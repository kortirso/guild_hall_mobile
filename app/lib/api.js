class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  static headersWithToken(token) {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }

  static get(route, params, token) {
    return this.xhr(route, null, token, 'GET')
  }

  static put(route, params, token) {
    return this.xhr(route, params, token, 'PUT')
  }

  static patch(route, params, token) {
    return this.xhr(route, params, token, 'PATCH')
  }

  static post(route, params, token) {
    return this.xhr(route, params, token, 'POST')
  }

  static delete(route, params, token) {
    return this.xhr(route, params, token, 'DELETE')
  }

  static async xhr(route, params, token, verb) {
    const host = 'http://127.0.0.1:5000/api/'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null )
    options.headers = token == null ? Api.headers() : Api.headersWithToken(token)

    let response = await fetch(url, options).then(function(response) {
      return response
    })
    let responseJson = await response.json()
    responseJson.status = response.status
    return responseJson
  }
}

export default Api
