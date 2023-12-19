import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import OutlinedTextInput from '../components/OutlinedTextInput';
import ButtonComponent from '../components/BottonComponent';
import { UserContext } from '../context';
import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [fullContent, setFullContent] = useState();

  const API_ENDPOINT = 'http://localhost:3000'; // Use your backend server's IP address if running on a physical device

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/check-credentials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          setError('Invalid credentials. Please try again.');
        } else {
          setError(`Login failed with status: ${response.status}`);
        }
        console.error('Login error:', responseData);
        return;
      }

      // Handle the successful login response here
      console.log('Login successful:', responseData);
      setFullContent(responseData);
      navigation.navigate('Home');
    } catch (error) {
      // Handle network or other errors
      console.error('Login error:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <UserContext.Provider value={fullContent}>
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
            <ButtonComponent title={'LogIn'}  // onPress={handleLogin} />
            onPress= {navigation.navigate('ChatScreen')} />
          </View>

          <TouchableOpacity
            style={{ height: '20%', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => navigation.navigate('SingupScreen')}
          >
            <Text>Create your Account !</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  ButtonView: { height: '10%', justifyContent: 'center', alignItems: 'center', marginTop: 60 },
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
});

export default LoginScreen;
