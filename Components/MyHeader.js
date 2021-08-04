import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import firebase from 'firebase';

export default class MyHeader extends React.Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <Header
                leftComponent={<Icon
                    name="bars"
                    type="ant-design"
                    color="white"
                    onPress={() => {
                      
                        this.props.navigation.toggleDrawer()
                    } }
                />}
                centerComponent={{
                    text: this.props.title,
                    style: {
                        color: 'white',
                        fontSize: 30,
                        fontWeight: 'bold',
                    }
                }}
                rightComponent={
                    <Icon
                        name='sign-out'
                        type='font-awesome'
                        size={50}
                        color={'white'}
                        onPress={() => {
                            this.props.navigation.navigate('WelcomeScreen')
                            firebase.auth().signOut()
                        }}
                    />
                }
            />
        )
    }
}