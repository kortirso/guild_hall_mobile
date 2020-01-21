import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { Colors } from '../styles'

class ConfirmScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.containerBody}>
        </ScrollView>
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
  }
})

export default ConfirmScreen
