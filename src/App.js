import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';

import { CountryScreen, LoginScreen, MainScreen, MapScreen } from './screens';

class App extends Component {
    isLoggedIn() {
        let isAuth = false;
        if (isAuth === true) {
            // what to do?
        } else {
            Actions.login();
        }
    }
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="main"
                        component={MainScreen}
                        title="Main"
                        onEnter={this.isLoggedIn}
                    />
                    <Scene
                        key="login"
                        component={LoginScreen}
                        title="Login"
                        hideNavBar={true}
                    />
                    <Scene
                        key="country"
                        component={CountryScreen}
                        onEnter={this.isLoggedIn}
                    />
                    <Scene key="map" component={MapScreen} onEnter={this.isLoggedIn} />
                </Stack>
            </Router>
        );
    }
}

export default App;
