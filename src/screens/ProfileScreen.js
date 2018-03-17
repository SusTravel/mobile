import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { sessionService } from 'redux-react-native-session';

import { Platform, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class ProfileScreen extends Component {
    onQuitPress = () => {
        sessionService.deleteSession();
        Actions.login();
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button danger large onPress={this.onQuitPress}>
                            <Text style={{color: 'white'}}> Quit </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default ProfileScreen;
