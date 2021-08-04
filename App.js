import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppTabNavigator } from './Components/AppTabNavigator';
import { AppDrawerNavigator } from './Components/DrawerNavigator';
import AboutUs from './Screens/AboutUs';
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },


})
const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
