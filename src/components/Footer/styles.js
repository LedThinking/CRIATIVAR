import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  button: {
    alignItems: "center",
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  }
})

export default styles;