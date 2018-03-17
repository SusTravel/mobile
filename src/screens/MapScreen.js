import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MapScreen extends Component {
    componentDidMount() {
        this.continentName = Actions.state.routes[Actions.state.index].params.name;

        navigator.geolocation.getCurrentPosition(
            console.log,
            console.log
        );
    }
    render() {
        return (
            <View>
                <Text>Privet</Text>
            </View>
        );
    }
}

export default MapScreen;
