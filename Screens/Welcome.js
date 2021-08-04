import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Name: '',
            Username: '',
            Password: '',
            isVisibleModal: false,
            confirmPassword: '',
            contact: '',
            address: '',
        }
    }

    userSignUp = (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            alert("The password doesnt confirm")
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((/*response*/) => {

                db.collection('user_cfc').add({
                    Email: this.state.Email,
                    Name: this.state.Name,
                    Username: this.state.Username,
                    contact: this.state.contact,
                    address: this.state.address,
                });
                alert("User Added Successfully", [{ text: 'ok', onPress: () => { this.setState({ isVisibleModal: false }) } }])
                // ToastAndriod.show("User Added Successfully");
            }).catch(function (error) {
                var errorcode = error.code; alert(error.message)
            });

        }
    }

    logIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => { return alert("User Entered Successfully"), this.props.navigation.navigate('Donate') }).catch(function (error) { var errorcode = error.code; alert(error.message) });
        //IFTTT
    }

    showModal = () => {
        return (
            <Modal visible={this.state.isVisibleModal} animationType='fade' transparent={true} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "navy", marginBottom: 50, marginTop: 50, marginRight: 30, marginLeft: 30, borderRadius: 20, alignSelf: 'center', }} >
                    <ScrollView style={{ width: '100%' }} >
                        <KeyboardAvoidingView>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold", fontStyle: 'italic', alignSelf: 'center', margin: 10, }} >Welcome to Cure4Cancer</Text>
                            <TextInput placeholder="First Name" style={styles.TextBox} onChangeText={(text) => { this.setState({ Name: text }) }}></TextInput>
                            <TextInput placeholder="Contact" maxLength={12} style={styles.TextBox} onChangeText={(text) => { this.setState({ contact: text }) }}></TextInput>
                            <TextInput placeholder="Address" multiline={true} style={styles.TextBox} onChangeText={(text) => { this.setState({ address: text }) }}></TextInput>
                            <TextInput placeholder="Email" keyboardType={'email-address'} style={styles.TextBox} onChangeText={(text) => { this.setState({ Email: text }) }}></TextInput>
                            <TextInput placeholder="Username" style={styles.TextBox} onChangeText={(text) => { this.setState({ Username: text }) }}></TextInput>
                            <TextInput placeholder="Password" secureTextEntry={true} style={styles.TextBox} onChangeText={(text) => { this.setState({ Password: text }) }}></TextInput>
                            <TextInput placeholder="Comfirm Password" secureTextEntry={true} style={styles.TextBox} onChangeText={(text) => { this.setState({ confirmPassword: text }) }}></TextInput>
                            <TouchableOpacity onPress={() => { this.userSignUp(this.state.Email, this.state.Password, this.state.confirmPassword) }}>
                                <Image style={{ height: 50, width: 150, paddingBottom: 20, alignSelf: 'center', }} source={require('../assets/signupButton.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ isVisibleModal: false })}>
                                <Image style={{ height: 50, width: 150, alignSelf: 'center', }} source={require('../assets/cancel.png')} />
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "steelblue" }} >
                {this.showModal()}
                <View>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >Cure4Cancer</Text>
                    <Image style={{ width: 200, height: 200 }} source={require("../assets/logo.png")} />
                </View>


                <View>
                    <TextInput keyboardType={'email-address'} style={styles.TextBox} onChangeText={(email) => { this.setState({ Email: email, }) }} placeholder="Email" />
                    <TextInput secureTextEntry={true} style={styles.TextBox} onChangeText={(pw) => { this.setState({ Password: pw, }) }} placeholder="Password" />
                </View>
                <View>
                    <TouchableOpacity onPress={() => { this.logIn(this.state.Email, this.state.Password) }} style={{ paddingBottom: 20 }} >
                        <Image style={{ height: 50, width: 170, }} source={require('../assets/loginButton.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ isVisibleModal: true }) }}>
                        <Image style={{ height: 50, width: 170, }} source={require('../assets/registerButton.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: "red",
        borderWidth: 5,
        width: 100,
        height: 40,
        marginTop: 10,
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.2
    },
    TextBox: {
        //border: 'solid',
        borderWidth: 0.25,
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.2,
        margin: 20,
        height: 40,
        width: 150,
        backgroundColor: 'white',
        alignSelf: 'center',
    }
})