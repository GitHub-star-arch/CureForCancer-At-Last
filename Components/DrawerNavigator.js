import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from '../Screens/Settings'
import CustomSideBarMenu from './CustomSideBarMenu'
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation-drawer'
import AboutUs from '../Screens/AboutUs'

export const AppDrawerNavigator = createDrawerNavigator(
    {
        
        Home: {
            screen: AppTabNavigator,
            navigationOptions: { drawerIcon: <Icon name="home" type="font-awesome" color="#ccffff" /> }
        },
        Settings: {
            screen: SettingScreen,
            navigationOptions: { drawerIcon: <Icon name='setting' type='ant-design' size={28} color={'#ccffff'} /> }
        },
        AboutUs: {
            screen: AboutUs,
            navigationOptions: { drawerIcon: <Icon name="newspaper-o" type="font-awesome" color="#ccffff" /> }
        }, 
       
       
    },
    {
        contentComponent:CustomSideBarMenu
      },
      {
        initialRouteName : 'Home'
    })