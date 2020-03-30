import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Feed } from './components/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthProvider';
import { Product } from './components/Product'

const Stack = createStackNavigator();

export const SettingsStack = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen 
        name="Feed" 
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
              style={{ marginRight: 15}}
              onPress={() => {
                logout();
              }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            )
          }
        }}
        component={Feed}/>
        <Stack.Screen 
          name="Product"
          options={({ route }) => ({
            headerTitle: `${route.params.name}`
          })} 
          component={Product} />
    </Stack.Navigator>
  )
}