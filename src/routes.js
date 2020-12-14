import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Manuais from './screens/Manuais';
import Welcome from './screens/ViewOfContentKit';

import { colors } from './styles';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Welcome"
        screenOptions={{
          headerTintColor: colors.colorTextPrimary,
          headerStyle: {
            backgroundColor: colors.colorSecondary,
          },
        }}
      />
      <Stack.Screen
        options={{title: 'Manuais'}}
        name="Manuais"
        component={Manuais}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
    </NavigationContainer>
  )
}

export default routes;