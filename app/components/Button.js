import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Colors, Fonts } from '../styles'

export default class Button extends Component {
  _onClick() {
    if (!this.props.isProcessing && !this.props.disabled) {
      Keyboard.dismiss()
      this.props.onButtonClick()
    }
  }

  render() {
    if (this.props.isProcessing) return <ActivityIndicator animating={true} size='large' color={Colors.black} />
    else return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TouchableOpacity onPress={this._onClick.bind(this)} activeOpacity={1} style={[styles.container, this.props.style]}>
          <Text style={[styles.text, Fonts.regular]}>{this.props.text}</Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center'
  }
})
