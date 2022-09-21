import React,{useEffect,useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Heading from '../components/heading';
import BackButton from '../components/backButton';
import Icon  from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'


const ViewCampaigns=({navigation})=>{
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const countries = ["Checked", "FollowUp", "Wait", "To do "]

 const getUsers = () => {
    fetch('https://iiiqbets.com/CRM-DEMO/admin/view-camp-api.php')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
}
useEffect(() => {
    setLoading(true);
    getUsers();
}, []);


  const getData=()=>{
    fetch('https://iiiqbets.com/CRM-DEMO/admin/view-camp-api.php')
    .then((response)=>response.text())
    .then((response)=>{
      var res=JSON.parse(response);
      setData(response);
   console.log("response=",res[1].city);
    })
    .catch((err)=>{
        console.warn(err);
    })
  }

   const delData=(id)=>{
    fetch('https://iiiqbets.com/CRM-DEMO/admin/del-camp-api.php?id=' + id, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    setTimeout(() => {
      getUsers();
      }, 3000);
    alert("Deleted Successfully ");
    console.log(id);

   }
  
   const showDatawithId=(id)=>{
    const myArray = JSON.parse(data);
    console.log(myArray[0].id)
    const result= myArray.filter(x=>(x.id===id));
    console.log(result);
    var str=(result);
     alert("id: "+str[0].id+"\n"+"campaign: "+str[0].campaign+"\n"+"Keyword: "+str[0].keyword)
    console.log('showDatawithId',str[0].id);
   }

   const goReadSheet=(item)=>{
    // alert(item.id);
    console.log(item)
     navigation.navigate('View Sheet',{id:item.id,campaign:item.campaign,camp_source:item.camp_source,city:item.city,date1:item.date1
    ,time1:item.time1})
   }
  return(
    <View>
      <Heading myState = 'Welcome to View Campaigns' myColor='blue'/>
       <View style={{ flexDirection: 'row', paddingLeft: 20,paddingTop:20  }}>
                <View style={{width:60,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}><Text style={{color:'black',fontWeight:'900',fontSize:25}}> ID </Text></View>
                <View style={{width:250,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}><Text style={{color:'black',fontWeight:'900',fontSize:25}}>Campaign </Text></View>
                {/* <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}><Text style={{color:'black',fontWeight:'900'}}>Date </Text></View>
                <View style={{width:100,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}><Text style={{color:'black',fontWeight:'900'}}>Time </Text></View> */}
                {/* <View style={{width:70,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}><Text style={{color:'black',fontWeight:'900'}}>Act </Text></View> */}
               
              </View>
        <View style={{ paddingLeft: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
            (
             
              
                <FlatList
                    data={users}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => 
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:60,height:35,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
                           <Text style={{color:'black',fontSize:25}}>{item.id} </Text>
                           </View>
                           <View style={{width:250,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
                    <Text style={{color:'black',fontSize:25}} onPress={()=>{goReadSheet(item)}}>{item.campaign} </Text>
                    </View>
                    {/* <View style={{width:70,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
                    <Text style={{color:'black'}}>{item.city} </Text>
                    </View>
                    <View style={{width:120,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
                    <Text style={{color:'black'}}>{item.date1} </Text>
                    </View>
                    <View style={{width:100,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}}>
                    <Text style={{color:'black'}}>{item.time1} </Text>
                    </View> */}
                    {/* <TouchableOpacity style={{width:35,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}} 
                  onPress={()=>showDatawithId(item.id)}>
                        <Text > <Icon color='black' name='eye' size={20}  /> </Text>
                     </TouchableOpacity> */}
                    {/* <TouchableOpacity style={{width:35,backgroundColor:'#F0EBE3',alignItems:'center',borderColor:"black",borderWidth:1}} 
                  onPress={()=>delData(item.id)}>
                        <Text > <Icon color='black' name='trash' size={20}  /> </Text>
                     </TouchableOpacity> */}
                     {/* <SelectDropdown
	                    data={countries}
	                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
	                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
	                    rowTextForSelection={(item, index) => {return item}}
                      
                      /> */}
                    </View>


                   }
                />
            )}
        </View>

      {/* { <Text>{data}</Text>} */}
      
      {/* <BackButton label="show" Textstyle={{color:'white'}} onPress={() => getData()} style={styles.button}/> 
      <BackButton label="withData" Textstyle={{color:'white'}} onPress={() => withData()} style={styles.button}/>  */}
      
      <BackButton label="Back" Textstyle={{color:'white'}} onPress={() => navigation.navigate('Dashboard')} style={styles.button}/>
      

    </View>
  )
}

const styles=StyleSheet.create({
  button:{
    width:'40%',
    padding:5,
    borderRadius:16,
    alignItems:'center',
    marginTop:300,
    marginLeft:20,
    backgroundColor:'blue'
},
buttonText:{
  fontSize:20,
  fontWeight:'600',
  color:'white'
},
delButton:{
  width:'10%',
 
  backgroundColor:'#F0EBE3'
},
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},

})


export default ViewCampaigns;