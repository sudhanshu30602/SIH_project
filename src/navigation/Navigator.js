import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SingupScreen from '../screens/SingupScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SingupScreen" component={SingupScreen}  options={{ headerShown: false }} />
      <Stack.Screen  name="Home" component={TabNavigator}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigator;
