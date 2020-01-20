import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../styles'

export default class HeaderBlock extends Component {
  _renderRight() {
    if (this.props.withRight) {
      return (
        <TouchableOpacity onPress={() => this.props.onRightPress()} activeOpacity={1}>
          <Text style={[styles.textButton, Fonts.regular]}>Menu</Text>
        </TouchableOpacity>
      )
    } else return <View style={styles.empty} />
  }

  _renderLeft() {
    if (this.props.withLeft) {
      return (
        <TouchableOpacity onPress={() => this.props.onLeftPress()} activeOpacity={1}>
          <Text style={[styles.textButton, Fonts.regular]}>Back</Text>
        </TouchableOpacity>
      )
    } else return <View style={styles.empty} />
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderLeft()}
        <Text style={[styles.text, Fonts.regular]}>{this.props.text}</Text>
        {this._renderRight()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkPlaceholder,
    backgroundColor: Colors.lightetsGray,
    color: Colors.text
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.darkText
  },
  textButton: {
    fontSize: 16,
    color: Colors.darkText,
    paddingTop: 3
  },
  empty: {
    width: 50
  }
})
