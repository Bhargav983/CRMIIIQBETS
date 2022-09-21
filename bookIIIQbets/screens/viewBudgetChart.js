import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Heading from '../components/heading';
import BackButton from '../components/backButton';
const Vbc=({navigation})=>{

  return(
    <View>
      
<Heading myState = 'Welcome to View Budget Chart' myColor='red' />
      <BackButton onPress={() => navigation.navigate('Dashboard')}/>


    </View>
  )
}

const styles=StyleSheet.create({

})


export default Vbc;