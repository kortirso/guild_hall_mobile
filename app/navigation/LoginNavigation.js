import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import { Colors } from '../styles'

const LoginStackNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    }
  },
  {
    defaultNavigationOptions: () => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(LoginStackNavigator)

export default class LoginNavigator extends Component {
  render() {
    return <AppContainer />
  }
}
