import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    View,
    Button,
    Image,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchContinents } from '../actions/Continents';

const styles = StyleSheet.create({
    container: {
        top: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
});

class MainScreen extends Component {
    componentDidMount() {
        this.props.fetchContinents();
    }

    onImagePress = continentName => {
        Actions.map({ name: continentName });
    };

    render() {
        return (
            <React.Fragment>
                <ScrollView style={{ top: 30 }}>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            What is your next traveling destination?
                        </Text>
                        <Text style={styles.instructions}>
                            Start entering name of the place you are about to go
                        </Text>

                        {this.props.continents.map((continent, i) => {
                            return (
                                <React.Fragment key={'fragment' + i}>
                                    <Text key={'text' + i}>{continent.name}</Text>
                                    <TouchableHighlight
                                        onPress={() => this.onImagePress(continent.name)}
                                    >
                                        <Image
                                            key={'image' + i}
                                            style={styles.image}
                                            source={{
                                                uri:
                                                    'https://s3.eu-central-1.amazonaws.com/sustravel/images/' +
                                                    continent.imageId
                                            }}
                                        />
                                    </TouchableHighlight>
                                </React.Fragment>
                            );
                        })}
                    </View>
                </ScrollView>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ session, Continents }) => {
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
