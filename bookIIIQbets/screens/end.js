import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
const End=({navigation})=>{

  return(
    <View>
      <Text>Welcome to End</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text> HOME </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({

})


export default End;