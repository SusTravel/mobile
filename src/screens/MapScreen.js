import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

class MapScreen extends Component {
    componentDidMount() {
        console.log(Actions.state.routes);
    }
    render() {
        return 'Map screen';
    }
}

export default MapScreen;
