import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
const BackButton=({label,Textstyle,...rest})=>{
  console.log(label==='undefined')
label=(label!=='undefined')?label:'BACK';
  return(
    <View>
      <TouchableOpacity {...rest} style={styles.button} >
        <Text style={[styles.buttonText,Textstyle]}> {label} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  button:{
    width:'40%',
    padding:5,
    borderRadius:16,
    alignItems:'center',
    marginTop:30,
    marginLeft:20,
    backgroundColor:'blue'
},
buttonText:{
  fontSize:20,
  fontWeight:'600',
  color:'white'
}
})


export default BackButton;