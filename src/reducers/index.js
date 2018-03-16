import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-native-session';

export default (AppReducer = combineReducers({
    session: sessionReducer
}));
