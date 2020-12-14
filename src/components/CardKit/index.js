import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles'

// import { Container } from './styles';

const CardKit = (props) => {
  const { text, onPress } = props

  return (
    <View style ={styles.container}>
      <TouchableWithoutFeedback onPress={onPress()}>
        <View style={styles.content}>
          <Text>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

CardKit.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CardKit;