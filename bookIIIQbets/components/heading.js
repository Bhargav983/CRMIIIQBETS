import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Heading = (props) => {
    console.log('Icon Name:',props.IconName)
 return (
 <View>
 <Text style = {[styles.myState,{color:props.myColor}]}>
 {props.myState}
 </Text>
 </View>
 )
}
export default Heading


const styles = StyleSheet.create ({
 myState: {
 marginTop: 20,
 textAlign: 'center',
 
 fontWeight: 'bold',
 fontSize: 20
 }
})
