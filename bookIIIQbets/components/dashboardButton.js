import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import Icon  from 'react-native-vector-icons/FontAwesome';

const DashboardButton=({label,Textstyle,ButtonColor,IconName,...rest})=>{
  console.log(label==='undefined')
  console.log(ButtonColor)

label=(label!=='undefined')?label:'Press Me ';
IconName=(IconName!=='undefined')?IconName:'user';
  return(
    <View style={styles.buttonContainer}>
      <TouchableOpacity {...rest} style={[styles.button,ButtonColor]} >
        <Text style={[styles.buttonText,Textstyle]}> {label} 
        <Icon color='#fff' name={IconName} size={20}  />

</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{justifyContent:'center',
    alignItems:'center',},
    button:{
        width:'90%',
        padding:20,
        borderRadius:16,
        alignItems:'center',
        paddingBottom:20,
        margin:10,
    },
    buttonText:{
        fontSize:15,
        fontWeight:'600',
        color:'white'
    }
})


export default DashboardButton;