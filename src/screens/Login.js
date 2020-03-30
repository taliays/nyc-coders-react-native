import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { Center } from '../components/Center';
import { AuthContext } from '../AuthProvider';

//pass it a navigation prop
export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button 
        title="go to register" 
        onPress={() => {
          navigation.navigate("Register")
        }}
      />
      <Button title="login"
      onPress={() => login()} />
    </Center>
  )
}

//navigation.goBack()
//navigation.navigate()
