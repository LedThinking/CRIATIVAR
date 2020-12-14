import React from 'react';
import { Alert, View, SafeAreaView, StatusBar } from 'react-native';

import { colors } from '../../styles';
import CardKit from '../CardKit';

import styles from './styles';

const ListManuais = () => {
  function onPressCard() {
    return Alert.alert(
      'Kit aberto'
    )
  }
  return (
    <SafeAreaView style={}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <View style={styles.content}>
        <View style={styles.boxContainer}>
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
          <CardKit
            test="Kit Maker"
            onPress={onPressCard()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ListManuais;