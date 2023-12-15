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
    <Tab.Navigator  screenOptions={{ headerShown: false }} 
    tabBarOptions={{
      activeTintColor: 'lightgreen', // Custom active color
      inactiveTintColor: '#bdc3c7', // Custom inactive color
      style: {
        backgroundColor: '#ffffff', // Custom background color
      },
      tabBarStyle: {
        display: 'flex',
      },
    }}
  >
      <Tab.Screen name="DashbordScreen" 
      component={DashbordScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={30} /> // Custom size
        ),
      }}
      />
      <Tab.Screen name="ChatScreen" 
      component={ChatScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble-ellipses-sharp" color={color} size={30} /> // Custom size
        ),
      }}
      />
      <Tab.Screen name="VideoScreen" 
      component={VideoScreen}
      options={{
        tabBarLabel: 'VideoScreen',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={30} /> // Custom size
        ),
      }}
      />
        <Tab.Screen name="ProfileScreen" 
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={30} /> // Custom size
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
