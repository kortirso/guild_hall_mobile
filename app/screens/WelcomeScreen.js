import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { Colors, Fonts } from '../styles'

class WelcomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={[styles.welcomeText, Fonts.regular]}>Welcome To Guild Hall</Text>
          <Text style={[styles.welcomeCaption, Fonts.regular]}>Application for World of Warcraft Classic for better guild and group management.</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 20
  },
  welcomeText: {
    color: Colors.black,
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  welcomeCaption: {
    fontSize: 18
  }
})

export default WelcomeScreen
