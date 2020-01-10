import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainAppTabNavigator from './MainAppTabNavigator'
import { Colors } from '../styles'

const AppNavigation = createStackNavigator(
  {
    App: {
      screen: MainAppTabNavigator
    }
  },
  {
    defaultNavigationOptions: () => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(AppNavigation)

export default class AppNavigator extends Component {
  render() {
    return <AppContainer />
  }
}
