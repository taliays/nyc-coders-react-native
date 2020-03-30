import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Portfolio } from './components/Portfolio';
import { Wallet } from './components/Wallet';
import { SettingsStack } from './SettingsStack';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    //Tab navigation > Customize > Screen options + expo-vector-icons import
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Settings') {
            iconName = 'ios-information-circle-outline';
            // return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Portfolio') {
            iconName = 'ios-list';
          } else if (route.name === 'Wallet') {
            iconName = 'ios-list-box';
          }
          // expo.github.io/vector-icons for more icons
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Portfolio" component={Portfolio}/>
      <Tabs.Screen name="Wallet" component={Wallet}/>
      <Tabs.Screen name="Settings" component={SettingsStack}/>
    </Tabs.Navigator>
  )
}