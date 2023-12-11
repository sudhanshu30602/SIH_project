import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Navigator from './src/navigation/Navigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // Set your primary color
    accent: '#f1c40f', // Set your accent color
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
