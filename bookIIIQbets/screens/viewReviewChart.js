import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Heading from '../components/heading';
import BackButton from '../components/backButton';
const Vrc=({navigation})=>{

  return(
    <View>
      <Heading myState = 'Welcome to View Review Chart' myColor='blue'/>
      <BackButton  Textstyle={{color:'white'}} onPress={() => navigation.navigate('Dashboard')} style={styles.button}/>
    </View>
  )
}

const styles=StyleSheet.create({

})


export default Vrc;