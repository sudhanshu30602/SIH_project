import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function DashbordScreen() {
  return (
    <View>
      <Text>DashbordScreen</Text>
      <Button
        title="Press me"
        onPress={() =>  navigation.navigate('SingupScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})