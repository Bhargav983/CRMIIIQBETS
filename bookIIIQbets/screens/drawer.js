import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Dashboard from './dashboard';
import LoginScreen1 from './login'
import { createStackNavigator } from '@react-navigation/stack';

import ViewCampaigns from './viewcampaigns';
import Vbr from './viewBroucherRequests';
import Vcr from './viewCallRequests';
import AddLeads from './addLeads';
import Leads from './Leads';
import Vcul from './viewContactUsLeads';
import Vrc from './viewReviewChart';
import Vbc from './viewBudgetChart';
import Vlcl from './viewLiveChatLeads';
import CustomDrawer from '../components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadSheet from './readsheet';
import VCReadSheet from './viewcampainreadsheet';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerScreen() {
  return (

// options={{headerShown:false ,   drawerItemStyle: { display: 'none' }}}
    <Drawer.Navigator  
    drawerContent={props => <CustomDrawer {...props} />}
    
    screenOptions={
      {
        headerStyle: {
      backgroundColor: 'blue', //Set Header color,
     
      },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
           paddingLeft:40
          },
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
    }}>
      <Drawer.Screen name="LoginScreen1" component={LoginScreen1} options={{headerShown:false ,   drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false ,   drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Dashboard" component={Dashboard} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} color={color} />
        ),
      }}
      />
      {/* <Drawer.Screen name="View Compaigns" component={Page1} /> */}
      <Drawer.Screen name="View Compaigns" component={ViewCampaigns} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="basket-outline" size={22} color={color} />
        ),
      }} />
      <Drawer.Screen name="View Broucher Requests" component={Vbr} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="file-tray-full-outline" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="View Call Requests" component={Vcr} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="call-outline" size={22} color={color} />
        ),
      }}
      />
      <Drawer.Screen name="Add Leads" component={AddLeads} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="person-outline" size={22} color={color} />
        ),
      }}
      />

<Drawer.Screen name="Sign Out" component={LoginScreen1}  
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="exit-outline" size={22} color={color} />
        ),
      }} 
      />
      <Drawer.Screen name="Leads" component={Leads} options={{ drawerItemStyle: { display: 'none' }}}/>

      <Drawer.Screen name="View Contact Us Leads" component={Vcul} options={{drawerItemStyle: { display: 'none' }}}/>

      <Drawer.Screen name="View Review Chart" component={Vrc} options={{drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="View Budget Chart" component={Vbc} options={{drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="View Live Chat Leads" component={Vlcl} options={{   drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Read Sheet" component={ReadSheet} options={{   drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="View Sheet" component={VCReadSheet} options={{   drawerItemStyle: { display: 'none' }}}/>

      {/* <Drawer.Screen name="BackButton" component={BackButton} options={{headerShown:false ,   drawerItemStyle: { display: 'none' }}}/> */}
    </Drawer.Navigator>

  );
}

export default DrawerScreen

