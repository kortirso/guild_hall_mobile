import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Modal, TouchableOpacity } from 'react-native'
import HeaderBlock from '../components/HeaderBlock'
import { Colors, Fonts } from '../styles'

class CloseEventsScreen extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false
    }
  }

  _linkClick() {
    this.setState({ modalVisible: false })
    this.props.navigation.navigate('ActivitiesFeed')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBlock withLeft onLeftPress={() => this.props.navigation.goBack()} withRight onRightPress={() => this.setState({ modalVisible: true })} text='The nearest events' />
        <View style={styles.containerBody}>
        </View>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text style={[styles.modalHeader, Fonts.regular]}>ACTIVITIES SECTION</Text>
            <TouchableOpacity onPress={() => this._linkClick()} style={styles.link} activeOpacity={1}>
              <Text style={[styles.modalLinkText, Fonts.regular]}>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.link, styles.activeLink]} activeOpacity={1}>
              <Text style={[styles.modalLinkText, Fonts.regular]}>The nearest events</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  modal: {
    paddingVertical: 40
  },
  modalHeader: {
    padding: 20,
    fontSize: 20
  },
  link: {
    padding: 20,
    textTransform: 'uppercase'
  },
  activeLink: {
    backgroundColor: Colors.simpleGray
  },
  modalLinkText: {
    fontSize: 16
  }
})

export default CloseEventsScreen
