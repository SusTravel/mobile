import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { sessionService } from 'redux-react-native-session';
import { connect } from 'react-redux';

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

class MainScreen extends Component {
    onPress = () => {
        sessionService.deleteSession();
        Actions.login();
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Current Scene: {this.props.title}</Text>
                <Button
                    onPress={this.onPress}
                    title="Quit"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const mapStateToProps = ({ session }) => {
    return {
        authenticated: session.authenticated
    };
};

export default connect(mapStateToProps)(MainScreen);
