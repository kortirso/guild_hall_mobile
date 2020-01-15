import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import Button from '../components/Button'
import { Colors } from '../styles'

class SettingsScreen extends Component {
  _onLogout() {
    this.props.setCredentials({ email: null, password: '' })
    this.props.logOut()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
          <Button text='Logout' onButtonClick={() => this._onLogout()} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerBody: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(SettingsScreen)
