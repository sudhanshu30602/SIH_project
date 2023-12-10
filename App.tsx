import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});