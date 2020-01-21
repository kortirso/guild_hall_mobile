import React from 'react'
import { TabBarBottom, createBottomTabNavigator } from 'react-navigation-tabs'
import StackActivities from './StackActivities'
import StackCharacters from './StackCharacters'
import GuildsScreen from '../screens/GuildsScreen'
import StaticsScreen from '../screens/StaticsScreen'
import EventsScreen from '../screens/EventsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import TabIcon from '../components/TabIcon'
import { Colors, Fonts } from '../styles'

export default createBottomTabNavigator(
  {
    Activities: {
      screen: StackActivities
    },
    Characters: {
      screen: StackCharacters
    },
    Guilds: {
      screen: GuildsScreen
    },
    Statics: {
      screen: StaticsScreen
    },
    Events: {
      screen: EventsScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Activities':
            iconName = `activities${focused ? 'Focused' : ''}`
            break
          case 'Characters':
            iconName = `characters${focused ? 'Focused' : ''}`
            break
          case 'Guilds':
            iconName = `guilds${focused ? 'Focused' : ''}`
            break
          case 'Statics':
            iconName = `statics${focused ? 'Focused' : ''}`
            break
          case 'Events':
            iconName = `events${focused ? 'Focused' : ''}`
            break
          case 'Settings':
            iconName = `settings${focused ? 'Focused' : ''}`
            break
        }
        return <TabIcon name={iconName} />
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      inactiveTintColor: '#000',
      labelStyle: Fonts.regular
    }
  }
)
