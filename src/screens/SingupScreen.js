// SignupScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground,Text } from 'react-native';
import { TextInput, Button, Title, Paragraph, IconButton } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import OutlinedTextInput from '../components/OutlinedTextInput';
import ButtonComponent from '../components/BottonComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SingupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
   // hideDatePicker();
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDateOfBirth(formattedDate);
  };

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
    source={require('../assets/Backgroundimage.png')}   
    style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Title style={styles.title}>Sign Up</Title>

        <OutlinedTextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        labelFontSize={20}
      />

      <OutlinedTextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        labelFontSize={20}
      />

        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.StyleIcon} onPress={showDatePicker}>
          <Icon name="calendar" size={30} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
           />
          <View style={styles.dateofBirthView}>
          <OutlinedTextInput
          label="Date of Birth"
          value={dateOfBirth}
          style={styles.dateInput}
          editable={false}
        />
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
        <ButtonComponent
        title={"Register"}
        onPress={()=> navigation.navigate('Home')}
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
  ButtonView:{height:'10%', justifyContent:'center', alignItems:'center'},
  StyleIcon:{
    justifyContent:'center',
    alignItems:'center'
  },
  dateofBirthView:{width:'70%'},
  container: {
    padding: 16,
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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginBottom: 16,
  },
  dateInput: {
    flex: 1,
    marginLeft: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default SingupScreen;
