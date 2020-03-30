import React from 'react';
import { Text, FlatList, Button } from 'react-native';
import { Center } from './Center';
import faker from 'faker';

export const Feed = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        style={{width: '100%'}}
        renderItem={({ item}) => {
          return <Button title={item} onPress={() => {navigation.navigate("Product", {
            name: item
          })}} />
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())} />
    </Center>
  )
}