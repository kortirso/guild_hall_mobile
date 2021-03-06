import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import { Colors } from '../styles'

const LoginStackNavigation = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    SignIn: {
      screen: SignInScreen
    }
  },
  {
    defaultNavigationOptions: () => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(LoginStackNavigation)

export default class LoginNavigator extends Component {
  render() {
    return <AppContainer />
  }
}
