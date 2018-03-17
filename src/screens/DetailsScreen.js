import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { fetchPlaces } from '../actions/Places';
import { fetchPathes } from '../actions/Pathes';

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
    },
    routes: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    path: {
        top: 5
    }
});

class DetailsScreen extends Component {
    componentDidMount() {
        let details = Actions.state.routes[Actions.state.index].params;
        let pointTo =
            details.location.coordinates[0] + ',' + details.location.coordinates[1];
        let pointFrom = this.props.pointFrom;

        this.props.fetchPath(pointFrom, pointTo);
    }

    onMapPress = (pathes) => {
        Actions.path(pathes);
    }

    onQrPress = details => {
        let id = details.id;
        let longitude = details.location.coordinates[0];
        let latitude = details.location.coordinates[1];

        BillingService.sendQRCodeResult(id, longitude, latitude).then(success => {
            this.props.fetchPlaces(longitude, latitude);
            alert('Success');
            Actions.details(details);
        });

        let passProps = {
            onRead: e => {
                let id = details.id;
                let longitude = details.location.coordinates[0];
                let latitude = details.location.coordinates[1];

                BillingService.sendQRCodeResult(id, longitude, latitude).then(success => {
                    this.props.fetchPlaces(longitude, latitude);
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
                    <Text style={styles.title}>
                        How to get here?&nbsp;&nbsp;
                        <TouchableHighlight onPress={() => this.onMapPress(this.props.pathes)}>
                            <FontAwesome style={{ fontSize: 32 }}>
                                {Icons.map}
                            </FontAwesome>
                        </TouchableHighlight>
                    </Text>

                    <View style={styles.routes}>
                        {this.props.pathes.map((pathData, i) => {
                            return (
                                <View style={styles.path}>
                                    <Text style={styles.title}>Path {i + 1}</Text>
                                    {pathData.steps.map((step, m) => {
                                        switch (step.mode) {
                                            case 'WALK':
                                                return (
                                                    <Text>{m + 1}) Walt to bus stop</Text>
                                                );

                                            case 'BUS':
                                            case 'TRAIN':
                                                return (
                                                    <Text>
                                                        {m + 1}) Take a bus
                                                        {step.name +
                                                            ' (' +
                                                            step.longName +
                                                            ')'}
                                                    </Text>
                                                );
                                        }
                                    })}
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ Location, Pathes }) => {
    console.log(Pathes);
    return {
        pointFrom:
            Location.location.coords.latitude + ',' + Location.location.coords.longitude,
        pathes: Pathes.pathes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaces: (longitude, latitude) => {
            return dispatch(fetchPlaces(longitude, latitude));
        },
        fetchPath: (pointFrom, pointTo) => {
            return dispatch(fetchPathes(pointFrom, pointTo));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
