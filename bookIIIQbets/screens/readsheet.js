import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {styles} from '../assets/Styles/generalStyles'
const ReadSheet = ({navigation,route}) => {
    const {formname,id,campaign,camp_source,city,date1,time1,name,email,mobile,budget,enquiry,comment,formno}=route.params;
    const content = ["Checked", "FollowUp", "Wait", "To do "]

    const delete1=()=>{
      alert('In progress..');
    }
  return (
    <View style={styles.container}>
    <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <Text style={{color:'black',fontWeight:'700',fontSize:20,alignItems:'center',textAlign:'center'}}> {formname} </Text>

        <View style={[styles.centerizedView,{top:'2%'}]}>
          <View style={[styles.authBox,{bottom:'2%'}]}>
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
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Name </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {name} </Text>
            </View>
             </View>

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Email </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {email} </Text>
            </View>
             </View>

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Mobile </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {mobile} </Text>
            </View>
             </View>
             
             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Budget </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {budget} </Text>
            </View>
             </View>

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Enquiry </Text>
            </View>
            <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {enquiry} </Text>
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

             <View style={{flexDirection:'row'}}>
          <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> Comments </Text>
            </View>
            {/* <View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {'Follow Up'} </Text>
            </View> */}
<View style={{width:150,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
            {/* <Text style={{color:'black',fontWeight:'900',fontSize:20}}> {'Follow Up'} </Text> */}
            <SelectDropdown
	                    data={content}
                        buttonStyle={styles.dropButton}
                        buttonTextStyle={styles.dropText}
                        rowTextStyle={{color:'red'}}
                        // rowStyle={{backgroundColor:'yellow'}}
                        defaultButtonText={comment}
	                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
	                     buttonTextAfterSelection={(selectedItem, index) => {return(selectedItem) }}
	                    // rowTextForSelection={(item, index) => {return item}}
                      
                      />
            </View>


             </View>

             </View>
      <View style={{marginLeft:50,marginBottom:5}}>
      
                <TouchableOpacity style={[styles.BlueButton,{width:'85%',marginTop:5,marginBottom:5}]} onPress={() =>delete1()}>
              <Text style={styles.ButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
        <View>
   {(formno==1)?
        <TouchableOpacity style={[styles.BlueButton,{marginTop:5}]} onPress={()=>{navigation.navigate('Leads')}}>
        <Text style={[styles.ButtonText]}> Leads </Text>
      </TouchableOpacity> : <Text> </Text>}

      {(formno==2)?
        <TouchableOpacity style={[styles.BlueButton,{marginTop:-25}]} onPress={()=>{navigation.navigate('View Contact Us Leads')}}>
        <Text style={[styles.ButtonText]}> View Contact Us  </Text>
      </TouchableOpacity> : <Text> </Text>}

      {(formno==3)?
        <TouchableOpacity style={[styles.BlueButton,{marginTop:2}]} onPress={()=>{navigation.navigate('Leads')}}>
        <Text style={[styles.ButtonText]}> Leads </Text>
      </TouchableOpacity> : <Text> </Text>}

      </View>
            </View>
            </View>
      </View>
  )
}
export default ReadSheet;