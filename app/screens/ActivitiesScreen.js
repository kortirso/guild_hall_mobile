import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { Kozizique } from '../lib/kozizique'
import HeaderBlock from '../components/HeaderBlock'
import { Colors, Fonts } from '../styles'

class ActivitiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: props.activities,
      modalVisible: false
    }
  }

  UNSAFE_componentWillMount() {
    this._fetchActivities()
  }

  async _fetchActivities() {
    let activities
    if (this.state.activities.length === 0) {
      activities = await this.props.fetchActivities(null, this.props.auth.access_token)
    } else {
      const lastUpdatedAt = this.state.activities[0].attributes.updated_at
      const result = await this.props.fetchActivities(`last_updated_at=${lastUpdatedAt}`, this.props.auth.access_token)
      activities = Kozizique(this.state.activities, result)
    }
    this.props.setActivities(activities)
    this.setState({activities: activities})
  }

  _renderActivities() {
    return this.state.activities.map((activity) => {
      return (
        <View style={styles.activity} key={activity.id}>
          <Text style={[styles.activityTitle, Fonts.semiBold]}>{activity.attributes.title}</Text>
          <Text style={[styles.activityText, Fonts.regular]}>{activity.attributes.description}</Text>
          {activity.attributes.guild_name !== null &&
            <Text style={[styles.activityGuild, Fonts.regular]}>{activity.attributes.guild_name}</Text>
          }
        </View>
      )
    })
  }

  _linkClick() {
    this.setState({ modalVisible: false })
    this.props.navigation.navigate('CloseEventsFeed')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBlock withRight onRightPress={() => this.setState({ modalVisible: true })} text='Activities' />
        <ScrollView style={styles.containerBody}>
          <View style={styles.activities}>
            {this._renderActivities()}
          </View>
        </ScrollView>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text style={[styles.modalHeader, Fonts.regular]}>ACTIVITIES SECTION</Text>
            <TouchableOpacity style={[styles.link, styles.activeLink]} activeOpacity={1}>
              <Text style={[styles.modalLinkText, Fonts.regular]}>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._linkClick()} style={styles.link} activeOpacity={1}>
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
  activities: {
    paddingBottom: 20
  },
  activity: {
    marginBottom: 20
  },
  activityTitle: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: 5
  },
  activityText: {
    fontSize: 16,
    color: Colors.text
  },
  modal: {
    paddingVertical: 40
  },
  modalHeader: {
    padding: 20,
    fontSize: 20
  },
  link: {
    padding: 20
  },
  activeLink: {
    backgroundColor: Colors.simpleGray
  },
  modalLinkText: {
    fontSize: 16
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    activities: state.activities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
