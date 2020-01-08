import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors, Fonts } from '../styles'

export default class InputField extends Component {
  render() {
    return (
      <TextInput
        style={[styles.inputElement, Fonts.regular, this.props.style ? this.props.style : null, this.props.description ? styles.description : null]}
        placeholder={this.props.placeholder}
        placeholderTextColor={Colors.placeholder}
        secureTextEntry={this.props.secure}
        underlineColorAndroid='transparent'
        keyboardType={this.props.keyboardType}
        autoCapitalize='none'
        onChangeText={(value) => this.props.onChange(value)}
        value={this.props.value}
        multiline={this.props.description}
        numberOfLines={this.props.description ? 9 : 1}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputElement: {
    backgroundColor: Colors.lightetsGray,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.placeholder,
    color: Colors.text
  },
  description: {
    height: 168,
    textAlignVertical: 'top',
    paddingTop: 16
  }
})
