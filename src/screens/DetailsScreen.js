import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import BillingService from '../services/BillingService';

const styles = StyleSheet.create({
    container: {
        top: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    description: {
        textAlign: 'center',
        color: '#333333',
        margin: 10
    },
    image: {
        width: 500,
        height: 300,
        resizeMode: 'contain'
    },
    qrCode: {
        flex: 1
    }
});

class DetailsScreen extends Component {
    onQrPress = details => {
        let passProps = {
            onRead: e => {
                let id = details.id;
                let longitude = details.location.coordinates[0];
                let latitude = details.location.coordinates[1];

                BillingService.sendQRCodeResult(id, longitude, latitude).then(success => {
                    alert('Success');
                    Actions.details(details);
                });
            },
            topContent: (
                <Text style={styles.centerText}>
                    You've found a QR code of the place? Cool, scan it!
                </Text>
            ),
            bottomContent: (
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            )
        };

        Actions.qrCode(passProps);
    };

    render() {
        let details = Actions.state.routes[Actions.state.index].params;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{details.name}</Text>
                    <View>
                        <Text style={styles.description}>
                            Your QR code is in the castle! Neil it! &nbsp; &nbsp; &nbsp;
                            <TouchableHighlight onPress={() => this.onQrPress(details)}>
                                <FontAwesome style={{ fontSize: 32 }}>
                                    {Icons.qrcode}
                                </FontAwesome>
                            </TouchableHighlight>
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={{
                                uri:
                                    'https://s3.eu-central-1.amazonaws.com/sustravel/images/' +
                                    details.imageId
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.description}>{details.description}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default DetailsScreen;
