import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { Kozizique } from '../lib/kozizique'
import HeaderBlock from '../components/HeaderBlock'
import { Colors, Fonts, Icons } from '../styles'

class CharactersScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: props.characters,
      modalVisible: false
    }
  }

  UNSAFE_componentWillMount() {
    this._fetchCharacters()
  }

  async _fetchCharacters() {
    let characters
    if (this.state.characters.length === 0) {
      characters = await this.props.fetchCharacters(null, this.props.auth.access_token)
    } else {
      const lastUpdatedAt = this.state.characters[0].attributes.updated_at
      const result = await this.props.fetchCharacters(`last_updated_at=${lastUpdatedAt}`, this.props.auth.access_token)
      characters = Kozizique(this.state.characters, result)
    }
    this.props.setCharacters(characters)
    this.setState({characters: characters})
  }

  _renderCharacters() {
    const characters = this.state.characters.sort((a, b) => {
      return b.attributes.level - a.attributes.level
    })
    return characters.map((character) => {
      return (
        <View style={styles.character} key={character.id}>
          <View style={styles.characterIconBlock}>
            <View style={styles.characterIconRace}></View>
            <Image source={Icons[character.attributes.character_class_name.en.toLowerCase()]} style={styles.characterIcon} />
            <View style={styles.characterLevel}>
              <Text style={[styles.characterLevelText, Fonts.regular]}>{character.attributes.level}</Text>
            </View>
          </View>
          <View style={styles.characterNameBlock}>
            <Text style={[styles.characterName, Fonts.regular]}>{character.attributes.name}</Text>
            <Text style={[styles.characterWorldName, Fonts.regular]}>{character.attributes.world_name}</Text>
            {character.attributes.guild_name !== null &&
              <Text style={[styles.characterWorldName, Fonts.regular]}>{character.attributes.guild_name}</Text>
            }
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBlock withRight onRightPress={() => this.setState({ modalVisible: true })} text='Characters' />
        <ScrollView style={styles.containerBody}>
          <View style={styles.characters}>
            {this._renderCharacters()}
          </View>
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
  },
  characters: {
    paddingBottom: 20
  },
  character: {
    marginBottom: 30,
    flexDirection: 'row'
  },
  characterIconBlock: {
    position: 'relative',
    width: 60
  },
  characterIconRace: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: Colors.tintColor,
    borderRadius: 4
  },
  characterIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 25,
    height: 25
  },
  characterLevel: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 25,
    height: 25,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2
  },
  characterLevelText: {
    color: Colors.darkText
  },
  characterNameBlock: {
    marginLeft: 30
  },
  characterName: {
    fontSize: 18,
    lineHeight: 18,
    color: Colors.darkText,
    marginBottom: 5
  },
  characterWorldName: {
    fontSize: 14,
    color: Colors.lightGray
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    characters: state.characters
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersScreen)
