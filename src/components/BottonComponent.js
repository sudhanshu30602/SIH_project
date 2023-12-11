import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';


const ButtonComponent = (props: any) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          {...styles.buttonStyle, ...props.buttonStyle},
          props.disabled && {backgroundColor: Colors.primaryDisabledColor},
        ]}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={{...styles.textStyle, ...props.textStyle}}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    width: 190,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1,
    borderRadius: 50,
    backgroundColor: '#5DE750',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default ButtonComponent;
