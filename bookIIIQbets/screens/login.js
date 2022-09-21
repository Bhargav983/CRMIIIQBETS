import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,AsyncStorage
} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
 import NetInfo from "@react-native-community/netinfo";

export default function LoginScreen1({ navigation }) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logStatus,setLogStatus]=React.useState(0);

  const [loginStatus,setLoginStatus]=React.useState("");
  const [isLogin, setIsLogin] = React.useState("false");
  let key='key',em='em',pw='pw',nm='nm';
  let value='true';

  useEffect(()=>{Hello()});

  
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


   const Hello=async()=>{
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setIsLogin(value);
        // setLoginStatus(value.toString());

        console.log("isLogin",(isLogin));
      }
    } catch (e) {
      alert('Failed to fetch the IsLogin from storage');
    }

     if(isLogin==="true")
      { console.log("Matched");
        navigation.navigate("Dashboard");}

   }
  
  const checkLogin=async()=>{
   
  if(email!="" && password!="")
  {
    fetch('https://iiiqbets.com/CRM-DEMO/admin/loginapi.php', {
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json',
    
  },
    body: JSON.stringify({
      email:email,
      password:password,
    }),
  })
    .then((response)=>response.text())
    .then((response)=>{
      var res=JSON.parse(response);
      setLogStatus(res[0].Message.status);
      console.log(loginStatus);
    })
    .catch((err)=>{
        console.warn(err);
    })
  ;
 console.log('email =',email,'  Password= ',password);

    if(logStatus===0){
      
      try {
        await AsyncStorage.setItem(key, (value))

        console.log('isLogin successfully saved')
      } catch (e) {
        console.log('Failed to save the data to the storage')
      }
      
         navigation.navigate('Dashboard');


      }
      else
      alert('Wrong username / password')
    }

    else
    alert('Please fill the fields')


    }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='user'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Lead CRM Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={setPassword}
              />
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={() =>checkLogin()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#3AB0FF',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#FF06B7',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#DAEAF1',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor:'red',
    borderWidth:2
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FF06B7',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
    color:'black',
    textAlign:'center'
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight:'600',
    color:'black',
    marginTop:6
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2D1D1',
    borderRadius: 4,
    paddingHorizontal: 10,
    color:'black',
    fontWeight:'500',
    fontSize:15
  },
  loginButton: {
    backgroundColor: '#3AB0FF',
    marginTop: 35,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom:30
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color:'black',
    fontWeight:'400'
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color:'black',
    fontWeight:'400'
  },
});