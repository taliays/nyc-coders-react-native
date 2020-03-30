import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Center } from './components/Center'; 
import { AuthContext } from './AuthProvider';
import { BottomTabs } from './BottomTabs';

const Stack = createStackNavigator()

export const Routes = () => {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if the user is logged in or not
    AsyncStorage.getItem("user").then(userString => {
      if (userString) {
        //decode it
        login();
      }
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large"/>
      </Center>
    )
  }
  return (
    <NavigationContainer>
      {user ? (
        <BottomTabs />
      ) : (
        <Stack.Navigator 
          // screenOptions={{
          //   header: () => null
          // }}
          initialRouteName="Register"> 
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen 
            name="Register"
            // options={{
            //   header: () => null
            // }}
            component={Register} 
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}