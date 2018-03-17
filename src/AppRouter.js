import React, { Component } from 'react';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import {
    CountryScreen,
    LoginScreen,
    MainScreen,
    MapScreen,
    ProfileScreen
} from './screens';
import { sessionService } from 'redux-react-native-session';

const AppRouter = props => {
    return (
        <Router>
            <Stack key="root">
                <Scene
                    key="login"
                    component={LoginScreen}
                    title="Login"
                    hideNavBar={true}
                    onEnter={this.loginAuthCheck}
                />
                <Scene
                    key="main"
                    component={MainScreen}
                    title="Main"
                    onEnter={this.authCheck}
                    hideNavBar={true}
                />

                <Scene key="country" component={CountryScreen} onEnter={this.authCheck} />
                <Scene key="map" component={MapScreen} onEnter={this.authCheck} />
                <Scene key="profile" component={ProfileScreen} onEnter={this.authCheck} />
            </Stack>
        </Router>
    );
};

export default AppRouter;
