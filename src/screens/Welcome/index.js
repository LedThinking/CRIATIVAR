import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png'

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToManual() {
    navigate('Manual')
  }

  function handleNavigateToScanner() {
    return Alert.alert(
      'Scanner'
    )
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToManual}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Lista de manuais</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToScanner}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={styles.buttonText}>Scanear manual</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;