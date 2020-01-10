import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import Icons from '../styles/Icons'

export default class TabIcon extends Component {
  render() {
    return <Image source={Icons[this.props.name]} style={styles.icon} />
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
