import React, { Component } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

const PathScreen = props => {
    let color = ['#00BFFF', '#B24112', '#E5845C'];
    return (
        <MapView style={styles.map}>
            {props.data.map((fullRoute, i) => {
                let coords = fullRoute.fullRoute.map((routeItem) => {
                    return { latitude: routeItem[0], longitude: routeItem[1] };
                });

                return <Polyline coordinates={coords} strokeColor={color[i] || '#000'} />;
            })}
        </MapView>
    );
};

export default PathScreen;
