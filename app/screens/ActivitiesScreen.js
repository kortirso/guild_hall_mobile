import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { Kozizique } from '../lib/kozizique'
import { Colors, Fonts } from '../styles'

class ActivitiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: props.activities
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
          <View style={styles.activities}>
            {this._renderActivities()}
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
  activities: {},
  activity: {
    marginBottom: 10
  },
  activityTitle: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: 5
  },
  activityText: {
    fontSize: 16,
    color: Colors.text
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
