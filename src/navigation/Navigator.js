import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SingupScreen from '../screens/SingupScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SingupScreen" component={SingupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigator;
