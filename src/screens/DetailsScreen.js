import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
    render() {
        let details = Actions.state.routes[Actions.state.index].params;

        console.log(details);

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{details.name}</Text>
                    <View>
                        <Text style={styles.description}>
                            Your QR code is in the castle! Neil it! &nbsp; &nbsp; &nbsp;
                            <FontAwesome style={{ fontSize: 32 }}>
                                {Icons.qrcode}
                            </FontAwesome>
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
                        <Text style={styles.description}>
                            {details.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default DetailsScreen;
