// LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import OutlinedTextInput from '../components/OutlinedTextInput';
import ButtonComponent from '../components/BottonComponent';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('SingupScreen');
  };

  return (
    <ImageBackground
      source={require('../assets/Backgroundimage.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Title style={styles.title}>Login</Title>

        
      <OutlinedTextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        labelFontSize={20}
      />
        <OutlinedTextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        labelFontSize={20}
        secureTextEntry={true}
      />


         <View style={styles.ButtonView}>
        <ButtonComponent
        title={"Register"}
        onPress={()=> navigation.navigate('SingupScreen')}
      />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  ButtonView:{height:'10%', justifyContent:'center', alignItems:'center', marginTop:60},
  container: {
    padding: 16,
    marginTop: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'lightgreen',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
