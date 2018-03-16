import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';

import { CountryScreen, LoginScreen, MainScreen, MapScreen } from './screens';

class App extends Component {
    authCheck() {
        let isAuth = false;
        if (isAuth === false) {
            Actions.login();
        }
    }

    loginAuthCheck() {
        if (isAuth === true) {
            Actions.main();
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
                        onEnter={this.authCheck}
                    />
                    <Scene
                        key="login"
                        component={LoginScreen}
                        title="Login"
                        hideNavBar={true}
                        onEnter={this.loginAuthCheck}
                    />
                    <Scene
                        key="country"
                        component={CountryScreen}
                        onEnter={this.authCheck}
                    />
                    <Scene key="map" component={MapScreen} onEnter={this.authCheck} />
                </Stack>
            </Router>
        );
    }
}

export default App;
