import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MyHeader from '../Components/MyHeader';
import db from '../config';

export default class SettingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            Contact: '',
            Name: '',
            Username: '',
            Address: '',
            userID: firebase.auth().currentUser.email,
            docId: '',
        }
    }

    componentDidMount() {
        this.getDetails()
    }

    getDetails = () => {
        //checking the current user by filtering the user collection and updating the details
        db.collection('users').where('Email', "==", this.state.userID).get().then(
            (snapshot) => {
                snapshot.forEach((document) => {
                    var doc_data = document.data()
                    this.setState({
                        Contact: doc_data.contact,
                        Name: doc_data.Name,
                        Username: doc_data.Username,
                        Address: doc_data.address,
                        docId: document.id,
                    })
                })
            }
        )
    }

    changeDetails = () => {



        db.collection("user_cfc").doc(this.state.docId).update({
            Name: this.state.Name,
            Username: this.state.Username,
            address: this.state.Address,
            contact: this.state.Contact,
        })
        alert("Your profile has been updated successfully")



    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                <ImageBackground source={require('../assets/gears-background.png')} style={{ width: '100%', height: '100%' }} >
                    <MyHeader title='Settings' navigation={this.props.navigation} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', }} >
                        <TextInput
                            style={styles.textBox}
                            value={this.state.Name}
                            onChangeText={(name) => { this.setState({ Name: name, }) }}
                            placeholder="Name"
                        />
                        <TextInput
                            style={styles.textBox}
                            value={this.state.Username}
                            onChangeText={(un) => { this.setState({ Username: un, }) }}
                            placeholder="UserName"
                        />
                        <TextInput
                            style={styles.textBox}
                            value={this.state.Address}
                            onChangeText={(a) => { this.setState({ Address: a, }) }}
                            placeholder="Address"
                        />
                        <TextInput
                            style={styles.textBox}
                            value={this.state.Contact}
                            onChangeText={(c) => { this.setState({ Contact: c, }) }}
                            placeholder="Contact"
                        />
                        <TouchableOpacity
                            onPress={() => { this.changeDetails() }}
                            style={{ justifyContent: 'center', margin: 50, width: '70%', height: 40, backgroundColor: '#2089DC' }}
                        >
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', }} >Change Details</Text>
                        </TouchableOpacity>
                    </View>
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