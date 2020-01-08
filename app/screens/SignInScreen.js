import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { Colors, Fonts } from '../styles'

class SignInScreen extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isProcessing: false
    }
  }

  _onLogin() {

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
  }
})

export default SignInScreen
