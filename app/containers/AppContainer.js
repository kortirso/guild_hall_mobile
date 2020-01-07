import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import LoginNavigation from '../navigation/LoginNavigation'
import store from '../store'

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

  render() {
    return (
      <View style={styles.container}>
        <LoginNavigation />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
