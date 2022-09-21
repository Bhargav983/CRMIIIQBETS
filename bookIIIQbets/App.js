import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './screens/drawer';
const App = () => {
  return (
    <NavigationContainer>

    
      <DrawerScreen/>
      </NavigationContainer>

    );
};

export default App;

const styles =  StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16
  }
});
