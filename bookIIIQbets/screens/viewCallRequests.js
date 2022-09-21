import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Heading from '../components/heading';
import BackButton from '../components/backButton';
const Vcr=({navigation})=>{

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const countries = ["Checked", "FollowUp", "Wait", "To do "]

 const getUsers = () => {
    fetch('https://e6bb-117-220-197-82.in.ngrok.io/')
      .then((response) => response.json())
      .then((json) => {setUsers(json);
        // console.log(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
}
useEffect(() => {
    setLoading(true);
    getUsers();
}, []);



  return(
    <View>
      {
          users.map((item) => (<View><Text>{item.id} {item.name}</Text></View>))
        }
      {/* <Text>{users}</Text> */}
      <Heading myState = 'Welcome to View Call Requests' myColor='red' />
      <BackButton onPress={() => navigation.navigate('Dashboard')}/>

    </View>
  )
}

const styles=StyleSheet.create({

})


export default Vcr;