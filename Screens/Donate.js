import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import MyHeader from '../Components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class DonateScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            Amount: '',
            Note: '',
            Name: '',
        }
    }

    updateDB = () => {
        db.collection('Gods').add({
            Email: firebase.auth().currentUser.email,
            Amount: this.state.Amount,
            Note: this.state.Note,
            Name: this.state.Name,
        });
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                <ImageBackground source={require('../assets/donate-screen.jpg')} style={{ width: '100%', height: '100%' }} >
                    <MyHeader title='Donations' navigation={this.props.navigation} />
                    <TextInput onChangeText={(name) => { this.setState({ Name: name, }) }} style={styles.textBox, { borderWidth: 3, }} placeholder="Name" />
                    <TextInput onChangeText={(amount) => { this.setState({ Amount: amount, }) }} style={styles.textBox, { borderWidth: 3, }} placeholder="Amount" />
                    <TextInput onChangeText={(note) => { this.setState({ Note: note, }) }} style={styles.textBox, { borderWidth: 3, }} placeholder="Note" />
                    <TouchableOpacity onPress={this.updateDB} style={styles.SubmitButtonStyle}>
                        <Text style={{fontWeight: 'bold', }} >
                            Finish Goodwill
                        </Text>
                    </TouchableOpacity>
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
        alignSelf: 'center',
        backgroundColor: '#C1ECFF'
    },

    SubmitButtonStyle: {

        marginTop: 10,
        fontWeight: 'bold',
        width: '7%',
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'center',
    },
})