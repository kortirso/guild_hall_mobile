import AsyncStorage from '@react-native-community/async-storage'

class LocalStorage {
  static async saveState(state) {
    try {
      const serializedState = JSON.stringify(state)
      await AsyncStorage.setItem('guild_hall_storage', serializedState)
    } catch (err) {
      // ignore
    }
  }
}

export default LocalStorage
