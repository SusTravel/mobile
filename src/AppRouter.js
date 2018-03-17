import React, { Component } from 'react';
import { Actions, Router, Stack, Scene  } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';
import {
    CountryScreen,
    LoginScreen,
    MainScreen,
    MapScreen,
    ProfileScreen,
    DetailsScreen
} from './screens';
import { sessionService } from 'redux-react-native-session';

const AppRouter = props => {
    renderMenuButton = () => {
        return <Button
            transparent
            onPress={() => {
                Actions.profile();
            }}
        >
            <Icon name="menu" />
        </Button>;
    }
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
                    left={() => null}
                    right={renderMenuButton}
                />

                <Scene key="country" component={CountryScreen} />
                <Scene key="map" component={MapScreen} onEnter={this.authCheck} right={() => (
                    <Button
                        transparent
                        onPress={() => {
                            Actions.profile();
                        }}
                    >
                        <Icon name="menu" />
                    </Button>
                )}/>
                <Scene key="profile" component={ProfileScreen} right={renderMenuButton} />
                <Scene key="details" component={DetailsScreen} right={renderMenuButton} />
            </Stack>
        </Router>
    );
};

export default AppRouter;
