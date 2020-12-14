import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorPrimary,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  boxContainer: {
    margin: metrics.doubleBaseMargin,
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.9,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default styles;