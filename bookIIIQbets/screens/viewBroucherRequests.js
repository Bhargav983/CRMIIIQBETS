import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BackButton from '../components/backButton';
import Heading from '../components/heading';
const Vbr=({navigation})=>{

  return(
    <View>
     
<Heading myState = 'Welcome to View Broucher Requests' myColor='red' />
      <BackButton onPress={() => navigation.navigate('Dashboard')}/>
     
    </View>
  )
}

const styles=StyleSheet.create({

})


export default Vbr;