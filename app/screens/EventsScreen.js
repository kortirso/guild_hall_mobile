import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Colors } from '../styles'

class EventsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
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
  }
})

export default EventsScreen
