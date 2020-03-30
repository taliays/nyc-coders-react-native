import React from 'react';
import { Text } from 'react-native';
import { Center } from './Center';

export const Product = ({ route }) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
    </Center>
  )
}