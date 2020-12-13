import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import imagebutton from '../../assets/images/buttonqr.png'

import styles from './styles';

const Footer = (props, {navigation}) => {
  const { navigation } = props

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigation.navigate(navigation)}
        >
          <Image source={imagebutton} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Footer.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default Footer;