import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import LoginNavigation from '../navigation/LoginNavigation'
import AppNavigation from '../navigation/AppNavigation'
import ConfirmNavigation from '../navigation/ConfirmNavigation'
import store from '../store'
import { isExist, isNotExist } from '../lib/presense'

class AppContainer extends Component {
  componentDidMount() {
    this._fetchStorage()
  }

  async _fetchStorage() {
    try {
      const serializedState = await AsyncStorage.getItem('guild_hall_storage')
      const result = await JSON.parse(serializedState)
      this._setStore(result)
    } catch (err) {
    }
  }

  _setStore(result) {
    if (isExist(result) && isExist(result.credentials) && isExist(result.credentials.email)) {
      store.dispatch(this.props.setCredentials(result.credentials))
      this.props.loginUser({email: result.credentials.email, password: result.credentials.password})
    }
  }

  _renderScreen() {
    const auth = this.props.auth
    if (isNotExist(auth) || isNotExist(auth.user)) return <LoginNavigation />
    else {
      if (auth.user.confirmed) return <AppNavigation />
      else return <ConfirmNavigation />
    }
  }

  render() {
    console.log(this.props.auth)
    return (
      <View style={styles.container}>
        {this._renderScreen()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
