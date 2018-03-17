import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  
class MapScreen extends Component {
    componentDidMount() {
        this.continentName = Actions.state.routes[Actions.state.index].params.name;

        navigator.geolocation.getCurrentPosition(console.log, console.log);
    }
    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        );
    }
}

export default MapScreen;
