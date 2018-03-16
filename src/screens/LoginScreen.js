import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { userAuth } from '../actions/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

class LoginScreen extends Component {
    loginFinished = (error, result) => {
        if (error) {
            alert('login has error: ' + result.error);
        } else if (result.isCancelled) {
            alert('login is cancelled.');
        } else {
            AccessToken.getCurrentAccessToken().then(data => {
                this.props.authenticateUser();
                Actions.push('main');
            });           
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <LoginButton
                    publishPermissions={['publish_actions']}
                    onLoginFinished={this.loginFinished}
                    onLogoutFinished={() => alert('logout.')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: user => {
            dispatch(userAuth());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
