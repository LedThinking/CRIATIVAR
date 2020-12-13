import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';
import ViewOfContentKit from './screens/ViewOfContentKit';

import { colors } from './styles';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'CRI@TIV@R',
          headerTintColor: colors.colorTextPrimary,
          headerStyle: {
            backgroundColor: colors.colorSecondary,
          },
        }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'CRI@TIV@R',
          headerStyle: {
            elevation: 0,
            backgroundColor: colors.colorSecondary,
          },
        }}
        name="ViewOfContentKit"
        component={ViewOfContentKit}
      />
    </NavigationContainer>
  )
}

export default routes;