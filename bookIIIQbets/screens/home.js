import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




const Home = ({ navigation }) => {
    
    return (
        <View style={styles.bannerContainer}>
            <Image source={require('../assets/logo.jpg')} style={{height:180,width:360,marginBottom:40,borderRadius:16}} />
            <TouchableOpacity onPress={() => navigation.navigate('View Compaigns')} style={styles.button}>
          <Text style={styles.buttonText}>  EXPLORE </Text>
        </TouchableOpacity>
       

        
        
    </View>
    )

}
  

export default Home

const styles =  StyleSheet.create({
    banner:{
        backgroundColor:'#F7F5F2',
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        flex:1
    },
    button:{
        width:'50%',
        backgroundColor:'#1A759F',
        padding:10,
        borderRadius:1000,
        alignItems:'center',
        paddingBottom:10
    },
    buttonText:{
        fontSize:24,
        fontWeight:'800',
        color:'white'
    }
})
