import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchLocation } from '../actions/Location';

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

        this.props.fetchLocation();
    }
    render() {
        let location = this.props.location;

        if (!location.coords) {
            return null;
        }

        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords ? location.coords.longitude : 37.78825,
                    longitude: location.coords ? location.coords.latitude : -122.4324,
                    latitudeDelta: 0.4222,
                    longitudeDelta: 0.3821
                }}
            />
        );
    }
}

const mapStateToProps = ({ session, Location }) => {
    return {
        authenticated: session.authenticated,
        location: Location.location
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLocation: () => {
            return dispatch(fetchLocation());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
