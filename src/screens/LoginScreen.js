import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { sessionService } from 'redux-react-native-session';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    backgroundImage: {
        top: 100,
        resizeMode: 'cover',
        height: 400
        
    },
    buttonContainer: {
        bottom: 50
    },
});

class LoginScreen extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.authenticated) {
            Actions.main();
        }
    }

    loginFinished = (error, result) => {
        if (error) {
            alert('login has error: ' + result.error);
        } else if (result.isCancelled) {
            alert('login is cancelled.');
        } else {
            AccessToken.getCurrentAccessToken().then(data => {
                this.props.authenticateUser({ login: 'some', name: 'user' });
                Actions.push('main');
            });
        }
    };

    render() {
        return (
            <ImageBackground
                source={require('../images/login-bg.png')}
                style={styles.container}
                imageStyle={styles.backgroundImage}
            >
                <View style={styles.buttonContainer} >
                    <LoginButton
                        publishPermissions={['publish_actions']}
                        onLoginFinished={this.loginFinished}
                        onLogoutFinished={this.props.quitUser}
                        style={styles.LoginButton}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({ session }) => {
    return {
        authenticated: session.authenticated
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: user => {
            dispatch(sessionService.saveSession(user));
        },
        quitUser: function() {
            sessionService.deleteSession();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
