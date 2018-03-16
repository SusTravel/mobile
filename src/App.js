import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppRouter from './AppRouter';

class App extends Component {
    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default App;
