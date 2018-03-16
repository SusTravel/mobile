import React, { Component } from 'react';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import { CountryScreen, LoginScreen, MainScreen, MapScreen } from './screens';
import { connect } from 'react-redux';
import { sessionService } from 'redux-react-native-session';

class AppRouter extends Component {
    loginAuthCheck = () => {
        let session = sessionService.loadSession();
        
        session.then(response => {
            if (this.props.authenticated) {
                Actions.main();
            }
        });
    };

    authCheck = () => {
        let session = sessionService.loadSession();

        session.then(response => {
            if (!this.props.authenticated) {
                Actions.login();
            }
        });
    };

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="main"
                        component={MainScreen}
                        title="Main"
                        onEnter={this.authCheck}
                        hideNavBar={true}
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

const mapStateToProps = state => {
    return {
        authenticated: state.session.authenticated
    };
};

export default connect(mapStateToProps)(AppRouter);
