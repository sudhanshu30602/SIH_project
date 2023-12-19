// ProfileScreen.js
import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { UserContext } from '../context';


const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    dateOfBirth: 'January 1, 1990',
    email: 'john.doe@example.com',
    profilePicture: 'https://placekitten.com/200/200', // Replace with your image URL
  };
 
  const content = useContext(UserContext);
  console.log(content);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Avatar.Image size={150} source={{ uri: user.profilePicture }} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.detail}>{`Date of Birth: ${user.dateOfBirth}`}</Text>
      <Text style={styles.detail}>{`Email: ${user.email}`}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate('HistoryScreen')}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.clickalbeView}>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate('SettingsScreen')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop:40,
    width: '90%',
    marginBottom:10,
  },
  clickalbeView:{
    width: '90%',
    marginBottom:10,
  },
  button: {
    backgroundColor: '#DAF7A6',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
