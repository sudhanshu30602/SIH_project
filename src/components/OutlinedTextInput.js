// OutlinedTextInput.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const OutlinedTextInput = ({ label, secureTextEntry, value, onChangeText, error, helperText, labelFontSize }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        outlineColor='lightgreen'
        //underlineColor='lightgreen'
        activeOutlineColor='lightgreen'
        secureTextEntry={secureTextEntry}
        mode="outlined"
        style={[
          isFocused ? styles.focusedInput : styles.outlinedInput,
          labelFontSize && { fontSize: labelFontSize },
        ]}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      {helperText && !error && <HelperText>{helperText}</HelperText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  outlinedInput: {
    backgroundColor: 'white',
  },
  focusedInput: {
    backgroundColor: 'white',
    borderColor: 'blue', // Set your desired focus color
  },
});

export default OutlinedTextInput;
