import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MyHeader from '../Components/MyHeader';
import { ListItem } from 'react-native-elements';
import db from '../config'

export default class DonorScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            donors: []
        }
    }

    componentDidMount = () => {
        db.collection('Gods').onSnapshot((snapshot) => {
            var donors = [];
            snapshot.docs.map((document) => {
                var details = document.data();
                donors.push(details)
            });
            this.setState({
                donors: donors,
            })
        })
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                <ImageBackground 
                    source={require('../assets/donor-background.png')} 
                    style={{ 
                        width: '100%', 
                        height: '100%' 
                    }} 
                >
                    <MyHeader title='Donors' navigation={this.props.navigation} />
                    <FlatList
                        keyExtractor={(item, index) => { index.toString() }}
                        data={this.state.donors}
                        renderItem={({ item, i }) => (
                            <ListItem
                                key={i}
                                title={item.Email}
                                subtitle={item.Note}
                                bottomDivider
                                rightElement={<Text style={{fontWeight: 'bold', fontSize: 25 }} >Amount: ${item.Amount}</Text>}
                                containerStyle={{backgroundColor: 'transparent', }}
                                titleStyle={{fontWeight: 'bold', fontSize: 25 }}
                                subtitleStyle={{fontWeight: 'bold', fontSize: 15 }}
                                >
                            </ListItem>
                        )}
                    />
                </ImageBackground>
            </View>
        );
    }

}