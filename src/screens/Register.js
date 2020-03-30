import React from 'react';
import { Text, Button } from 'react-native';
import { Center } from '../components/Center';

export const Register = ({ navigation }) => {
  return (
    <Center>
      <Text>I am a register screen</Text>
      <Button 
        title="go to login"
        onPress={() => navigation.navigate("Login")}
      />   
    </Center>
  )
}