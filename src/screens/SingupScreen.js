import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Title } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import OutlinedTextInput from '../components/OutlinedTextInput';
import ButtonComponent from '../components/BottonComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [error, setError] = useState(null);

  const API_ENDPOINT = 'http://localhost:3000'; // replace with your machine's IP address and port

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDateOfBirth(formattedDate);
  };
  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: email,
          DOB: dateOfBirth,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 400) {
          setError('Invalid data. Please check your input.');
        } else if (response.status === 401) {
          setError('Unauthorized. Please check your credentials.');
        } else {
          setError(`Signup failed with status: ${response.status}`);
        }
        console.error('Signup error:', responseData);
        return;
      }

      // Handle the successful signup response here
      console.log('Signup successful:', responseData);
      // Optionally, perform any action after successful signup
      navigation.navigate('Home'); // Navigate to the home screen after successful signup
    } catch (error) {
      // Handle network or other errors
      console.error('Signup error:', error.message);
      setError('An error occurred during signup. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../assets/Backgroundimage.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Title style={styles.title}>Sign Up</Title>

        <OutlinedTextInput label="Email" value={email} onChangeText={(text) => setEmail(text)} labelFontSize={20} />

        <OutlinedTextInput label="Username" value={username} onChangeText={(text) => setUsername(text)} labelFontSize={20} />

        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.StyleIcon}>
            <Icon name="calendar" size={30} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={styles.dateofBirthView}>
            <OutlinedTextInput label="Date of Birth" value={dateOfBirth} style={styles.dateInput} editable={false} />
          </View>
        </View>

        <OutlinedTextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          labelFontSize={20}
          secureTextEntry={true}
        />

        <View style={styles.ButtonView}>
          <ButtonComponent title={'Register'} onPress={handleSignup} />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
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
  ButtonView: { height: '10%', justifyContent: 'center', alignItems: 'center' },
  StyleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateofBirthView: { width: '70%' },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'lightgreen',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
  dateInput: {
    flex: 1,
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;
