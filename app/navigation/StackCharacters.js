import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import CharactersScreen from '../screens/CharactersScreen'
import { Colors } from '../styles'

export default StackCharacters = createStackNavigator(
  {
    CharactersFeed: {
      screen: CharactersScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)
