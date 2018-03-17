import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-native-session';

import Continents from './Continents';
import Location from './Location';
import Places from './Places';

export default (AppReducer = combineReducers({
    session: sessionReducer,
    Continents,
    Places,
    Location
}));
