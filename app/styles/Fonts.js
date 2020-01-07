import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  light: {
    letterSpacing: 0.83,
    ...Platform.select({
      android: {
        fontFamily: 'sourcesanspro_light'
      },
      ios: {
        fontWeight: '300',
        fontFamily: 'Source Sans Pro'
      }
    })
  },
  regular: {
    letterSpacing: 0.83,
    ...Platform.select({
      android: {
        fontFamily: 'sourcesanspro_regular'
      },
      ios: {
        fontFamily: 'Source Sans Pro'
      }
    })
  },
  semiBold: {
    letterSpacing: 0.83,
    ...Platform.select({
      android: {
        fontFamily: 'sourcesanspro_semibold'
      },
      ios: {
        fontWeight: '600',
        fontFamily: 'Source Sans Pro'
      }
    })
  }
})
