import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Platform, StyleSheet, Text, View } from 'react-native';

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
    render() {
        return (
            <View style={styles.container}>
                <LoginButton
                    publishPermissions={['publish_actions']}
                    onLoginFinished={(error, result) => {
                        if (error) {
                            alert('login has error: ' + result.error);
                        } else if (result.isCancelled) {
                            alert('login is cancelled.');
                        } else {
                            AccessToken.getCurrentAccessToken().then(data => {
                                alert(data.accessToken.toString());
                            });
                        }
                    }}
                    onLogoutFinished={() => alert('logout.')}
                />
            </View>
        );
    }
}

export default LoginScreen;
