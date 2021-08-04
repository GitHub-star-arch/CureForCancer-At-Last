import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MyHeader from '../Components/MyHeader';
import db from '../config';
import { AppTabNavigator } from '../Components/AppTabNavigator';
import { Card, Icon } from 'react-native-elements';
import { Button } from 'react-native';
export default class AboutUs extends React.Component {

    constructor() {
        super();

    }



    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                <ImageBackground source={require('../assets/Background.jpg')} style={{ width: '100%', height: '100%' }} >
                    <MyHeader title='About Us' navigation={this.props.navigation} />
                    <Card
                        titleStyle={{ marginBottom: 10, fontWeight: 'bold', fontSize: 50, }}
                        title='OUR CAUSE'
                        image={require('../assets/NoCancer.jpg')}>
                        <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 50, }}>
                            The cause for this app is that many people around the world are scared for their lives thanks to cancer and we would like to help them live the rest of their lives in peace. 
                        </Text>
                        <Button
                            onPress={()=>this.props.navigation.navigate('Donate')}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='HELP AND DONATE NOW' />
                    </Card>
                    <Card
                        titleStyle={{ marginBottom: 10, fontWeight: 'bold', fontSize: 50, }}
                        title='Our Wonderful Donors'
                        image={require('../assets/Help.jpg')}>
                        <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 50, }}>
                            We have learned that when the entire community chips in to help the work is much more effective and help more people than one person ever could.
                        </Text>
                        <Button
                            onPress={()=>this.props.navigation.navigate('Donors')}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Go Check Out Our Community' />
                    </Card>
                    <Card
                        titleStyle={{ marginBottom: 10, fontWeight: 'bold', fontSize: 50, }}
                        title='Recent Posts'
                        image={require('../assets/Post.png')}>
                        <Text style={{ marginBottom: 10 }}>
                            No Post So Far...
                        </Text>
                    </Card>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textBox: {
        width: '75%',
        height: 40,
        margin: 15,
        borderWidth: 2,
        alignSelf: 'center',
        backgroundColor: '#C1ECFF'
    }
})