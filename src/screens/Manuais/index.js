import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import ListManuais from '../../components/ListManuais';

import TextInput from 'react-native-textinput-with-icons'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors } from '../../styles';
import styles from './styles';

const Manuais = () => {

  const [value, onChangeText] = useState('Digite aqui o manual procurado')

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={}>
          <Text>Tipo do manual</Text>
        </View>
        <TextInput
          rightIcon="text-search"
          rightIconType="material"
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <View>
          <Text>Manuais disponiveis</Text>
          <ListManuais />
        </View>
        <View>
          <Button
            icon={
              <Icon
                name="plus-circle"
                size={15}
                color={colors.colorSecondary}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Manuais;