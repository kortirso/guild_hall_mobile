import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ConfirmScreen from '../screens/ConfirmScreen'
import { Colors } from '../styles'

const ConfirmNavigation = createStackNavigator(
  {
    Confirm: {
      screen: ConfirmScreen
    }
  },
  {
    defaultNavigationOptions: () => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(ConfirmNavigation)

export default class ConfirmNavigator extends Component {
  render() {
    return <AppContainer />
  }
}
