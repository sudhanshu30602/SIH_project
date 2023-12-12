// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';
import DashbordScreen from '../screens/DashbordScreen';
import ChatScreen from '../screens/ChatScreen';
import AccountScreen from '../screens/AccountScreen';



const Tab = createBottomTabNavigator();



const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  };


  const DetailsScreen = () => {
    return (
      <View>
        <Text>Details Screen</Text>
      </View>
    );
  };

const TabNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
      <Tab.Screen name="DashbordScreen" component={DashbordScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
