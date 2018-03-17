import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-native-session';

import Continents from './Continents';

export default (AppReducer = combineReducers({
    session: sessionReducer,
    Continents
}));
