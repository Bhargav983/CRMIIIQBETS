import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {styles} from '../assets/Styles/generalStyles'
const VCReadSheet = ({navigation,route}) => {
    const {id,campaign,camp_source,city,date1,time1}=route.params;
    const countries = ["Checked", "FollowUp", "Wait", "To do "]

    const delete1=()=>{
      alert('In progress..');
    }
  return (
    <View style={styles.container}>
    <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={[styles.centerizedView,{top:'10%'}]}>
          <View style={[styles.authBox]}>
            <View style={{margin:10}}>
          <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> ID </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {id} </Text>
            </View>
             </View>

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Campaign </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {campaign} </Text>
            </View>
             </View>

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> City </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {city} </Text>
            </View>
             </View>
             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Date </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {date1} </Text>
            </View>
             </View>
             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Time </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {time1} </Text>
            </View>
             </View>

             </View>
      <View style={{marginLeft:50}}>
      {/* <SelectDropdown
	                    data={countries}
                        buttonStyle={styles.PinkButton}
                        buttonTextStyle={styles.ButtonText}
                        rowTextStyle={{color:'red'}}
                        // rowStyle={{backgroundColor:'yellow'}}
                        defaultButtonText="Add Comment"
	                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
	                     buttonTextAfterSelection={(selectedItem, index) => {return(selectedItem) }}
	                    // rowTextForSelection={(item, index) => {return item}}
                      
                      /> */}
                <TouchableOpacity style={[styles.BlueButton,{width:'85%',marginTop:5}]} onPress={() =>delete1()}>
              <Text style={styles.ButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.BlueButton,{marginTop:5}]} onPress={()=>{navigation.navigate('View Compaigns')}}>
        <Text style={[styles.ButtonText]}> ViewCampaigns </Text>
      </TouchableOpacity>
            </View>
            </View>
      </View>
  )
}
export default VCReadSheet;