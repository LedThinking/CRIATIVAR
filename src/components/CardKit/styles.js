import {StyleSheet} from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.25,
    width: metrics.screenWidth * 0.3,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.baseBorder,
    elevation: metrics.baseElevation,
  },
  content: {
    flex: 1,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary, 
  },

  text: {
    flex: 1,
    fontSize: 12,
    color: colors.colorTextSecondary,
  }
})

export default styles;