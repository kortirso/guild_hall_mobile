import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ActivitiesScreen from '../screens/ActivitiesScreen'
import CloseEventsScreen from '../screens/CloseEventsScreen'
import { Colors } from '../styles'

export default StackActivities = createStackNavigator(
  {
    ActivitiesFeed: {
      screen: ActivitiesScreen
    },
    CloseEventsFeed: {
      screen: CloseEventsScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      backgroundColor: Colors.white
    }),
    headerMode: 'none'
  }
)
