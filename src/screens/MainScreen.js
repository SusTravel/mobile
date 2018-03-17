import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { sessionService } from 'redux-react-native-session';
import { connect } from 'react-redux';
import { fetchContinents } from '../actions/Continents';

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
    componentDidMount() {
        this.props.fetchContinents();
    }

    onPress = () => {
        sessionService.deleteSession();
        Actions.login();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    What is your next traveling destination?
                </Text>
                <Text style={styles.instructions}>
                    Start entering name of the place you are about to go
                </Text>
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

const mapStateToProps = ({ session, Continents }) => {
    console.log(Continents);
    return {
        authenticated: session.authenticated,
        continents: Continents.continents || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContinents: () => {
            return dispatch(fetchContinents());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
