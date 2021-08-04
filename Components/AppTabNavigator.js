import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonorScreen from '../Screens/Donor';
import DonateScreen from '../Screens/Donate';
import { Icon } from 'react-native-elements';

export const AppTabNavigator = createBottomTabNavigator({
    Donors: {
        screen: DonorScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='hands-helping' type='font-awesome-5' size={28} color={'purple'} />),
            tabBarLabel: "Our Wonderful Donors"
        }
    },
    Donate: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='charity' type='material-community' size={28} color={'purple'} />),
            tabBarLabel: "One Of Us"
        }
    },
})