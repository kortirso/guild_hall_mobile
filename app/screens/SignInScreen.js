import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native'
import { authorize } from 'react-native-app-auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { isNotExist } from '../lib/presense'
import { Colors, Fonts } from '../styles'

const config = {
  clientId: '641218634445881344',
  clientSecret: 'knJxwWbd8WX17IGjkYW6VNZEvuJMkgdV',
  redirectUrl: 'com.guildhall://oauthredirect',
  scopes: ['email', 'identify'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
    tokenEndpoint: 'https://discordapp.com/api/oauth2/token',
    revocationEndpoint: 'https://discordapp.com/api/oauth2/token/revoke'
  }
}

class SignInScreen extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isProcessing: false
    }
  }

  async _onLogin() {
    this.setState({ isProcessing: true })
    const errors = this._checkValues()
    if (errors.length === 0) {
      this.props.setCredentials({ email: this.state.email, password: this.state.password })
      const result = await this.props.loginUser({ email: this.state.email, password: this.state.password })
      if (isNotExist(result)) {
        this.setState({ isProcessing: false })
        Alert.alert(
          'ERROR',
          'Wrong login credentials',
          [
            {text: 'OK', onPress: () => console.log('OK')}
          ],
          { cancelable: true }
        )
      }
    } else {
      Alert.alert(
        'ERROR',
        errors[0],
        [
          {text: 'OK', onPress: () => console.log('OK')}
        ],
        { cancelable: true }
      )
      this.setState({ isProcessing: false })
    }
  }

  _checkValues() {
    let errors = []
    if (this.state.email === '') errors.push('Email is required field')
    if (this.state.password === '') errors.push('Password is required field')
    return errors
  }

  async _onLoginDiscord() {
    this.setState({ isProcessing: true })
    try {
      const authResult = await authorize(config)
      const result = await this.props.loginUser({ provider: 'discord', access_token: authResult.accessToken })
      if (isNotExist(result)) {
        Alert.alert(
          'ERROR',
          'Wrong login credentials',
          [
            {text: 'OK', onPress: () => console.log('OK')}
          ],
          { cancelable: true }
        )
      }
      this.setState({ isProcessing: false })
    } catch (error) {
      console.log(error)
      this.setState({ isProcessing: false })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
          <View style={styles.welcome}>
            <Text style={[styles.text, Fonts.regular]}>Welcome back to Guild Hall</Text>
          </View>
          <InputField placeholder='Email' keyboardType='email-address' value={this.state.email} onChange={(value) => this.setState({email: value})} />
          <InputField secure placeholder='Password' keyboardType='default' value={this.state.password} onChange={(value) => this.setState({password: value})} />
          <Button text='Sign In' processing={this.state.isProcessing} onButtonClick={() => this._onLogin()} />
          <Button text='Login through Discord' processing={this.state.isProcessing} onButtonClick={() => this._onLoginDiscord()} style={styles.discordButton} />
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
  },
  welcome: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    marginBottom: 15,
    paddingLeft: 25,
    color: Colors.text,
    fontSize: 24
  },
  discordButton: {
    marginTop: 20
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(SignInScreen)
