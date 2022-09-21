import React,{useEffect} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import DashboardButton from '../components/dashboardButton';
import Icon  from 'react-native-vector-icons/FontAwesome';
import NetInfo from "@react-native-community/netinfo";

const Dashboard=({navigation})=>{
  
  useEffect(() => {
    if (navigation.isFocused()) {
      checkWifi(); // replace with your function
    }
  }, [navigation.isFocused()]);
  
  
  
  const checkWifi=()=>{
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      if(!state.isConnected)
      {
        alert('Please check your wifi/Mobile Data Connection');
      }
  });
  }
  
  
  return(
    <SafeAreaView style={styles.bannerContainer}>
    <ScrollView style={styles.scrollView}>
      {/* <Text style={{fontSize:34,
      fontWeight:'800',
      color:'black',margin:30,backgroundColor:'yellow',borderRadius:18,padding:10,borderWidth:2,borderColor:'red'}}>Content</Text> */}

        <DashboardButton 
        label="View Campaigns             "
        IconName='shopping-bag'
         Textstyle={{color:'black'}} 
         ButtonColor={{backgroundColor:'#3AB0FF'}} 
         onPress={() => navigation.navigate('View Compaigns')} />


        <DashboardButton 
        label='       Leads                          '
        IconName='user'
         Textstyle={{color:'white'}} 
         ButtonColor={{backgroundColor:'#4E944F'}} 
         onPress={() => navigation.navigate('Leads')} />

        <DashboardButton 
        label='View Contact Us Leads   '
        IconName='user-plus'
         Textstyle={{color:'black'}} 
         ButtonColor={{backgroundColor:'#FFD93D'}} 
         onPress={() => navigation.navigate('View Contact Us Leads')} />

        <DashboardButton
        label='View Broucher Requests  '
        IconName='file-code-o'
        Textstyle={{color:'white'}}
        ButtonColor={{backgroundColor:'#F94C66'}}
        onPress={()=>navigation.navigate('View Broucher Requests')}/>

<DashboardButton
        label='View Call Requests         '
        IconName='phone'
        Textstyle={{color:'white'}}
        ButtonColor={{backgroundColor:'#F77E21'}}
        onPress={()=>navigation.navigate('View Call Requests')}/>

<DashboardButton
        label='View Budget Chart         '
        IconName='rupee'
        Textstyle={{color:'white'}}
        ButtonColor={{backgroundColor:'#FF7396'}}
        onPress={()=>navigation.navigate('View Budget Chart')}/>

<DashboardButton
        label='View Review Chart        '
        IconName='bar-chart'
        Textstyle={{color:'white'}}
        ButtonColor={{backgroundColor:'#53BF9D'}}
        onPress={()=>navigation.navigate('View Review Chart')}/>

<DashboardButton
        label='View Live Chat Leads     '
        IconName='wechat'
        Textstyle={{color:'white'}}
        ButtonColor={{backgroundColor:'#A149FA'}}
        onPress={()=>navigation.navigate('View Live Chat Leads')}/>

{/* 
      <TouchableOpacity  onPress={() => navigation.navigate('Page2')}  style={[styles.button,{backgroundColor:'#CE49BF'}]} >
        <Text style={styles.buttonText}> Why iiiQbets </Text>
      </TouchableOpacity> */}

    </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard;


const styles =  StyleSheet.create({
  banner:{
      height:300,
      width:300
  },
   scrollView:{
      
  },
  bannerContainer:{},
  buttonContainer:{justifyContent:'center',
  alignItems:'center',},
  button:{
      width:'70%',
      padding:20,
      borderRadius:16,
      alignItems:'center',
      paddingBottom:20,
      margin:10,
      
  },
  buttonText:{
      fontSize:20,
      fontWeight:'600',
      color:'white'
  }
})
