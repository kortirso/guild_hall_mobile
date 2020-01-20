import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

const metrics = {
  platform: Platform.OS,
  androidFudgeFactor: (Platform.OS === 'ios') ? 0 : 24,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
}

export default metrics
