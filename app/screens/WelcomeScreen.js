import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import Button from '../components/Button'
import { Colors, Fonts } from '../styles'

class WelcomeScreen extends Component {
  _onSignUpClick() {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
          <View style={styles.body}>
            <Text style={[styles.welcomeText, Fonts.regular]}>Guild Hall</Text>
            <Text style={[styles.welcomeCaption, Fonts.regular]}>Application for World of Warcraft Classic for better guild and group management.</Text>
          </View>
          <View style={styles.signBlock}>
            <Button isProcessing={false} disabled={false} text='Sign In' style={styles.signInButton} onButtonClick={() => this.props.navigation.navigate('SignIn')} />
            <Text style={Fonts.regular}>or</Text>
            <Button isProcessing={false} disabled={false} text='Sign Up' style={styles.signInButton} onButtonClick={() => this._onSignUpClick.bind(this)} />
          </View>
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
  body: {
    flex: 1,
    justifyContent: 'center'
  },
  welcomeText: {
    color: Colors.black,
    fontSize: 36,
    marginBottom: 20
  },
  welcomeCaption: {
    fontSize: 18
  },
  signBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButton: {
    display: 'flex',
    marginHorizontal: 10
  }
})

export default WelcomeScreen
