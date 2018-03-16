import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { sessionService } from 'redux-react-native-session';

import AppReducer from './reducers';
import AppRouter from './AppRouter';

store = createStore(AppReducer);
sessionService.initSessionService(store);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default App;
