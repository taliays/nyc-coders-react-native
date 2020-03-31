import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
const sampleimg =require('../../assets/Cereal1.png');
export const SampleImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={sampleimg}/>
    </View>
  ) 
}

const styles = StyleSheet.create({
    container: {
    
      paddingTop: 100,
      alignItems: "center",
      justifyContent:"center"
    },
    stretch: {
      width: 325,
      height: 500,
      resizeMode: 'stretch',
    },
  });