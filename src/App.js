import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { sessionService } from 'redux-react-native-session';

import AppReducer from './reducers';
import AppRouter from './AppRouter';

store = createStore(AppReducer, applyMiddleware(thunk));
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
