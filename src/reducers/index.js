import { combineReducers } from 'redux';
import authReducer from './auth';

export default (AppReducer = combineReducers({
    auth: authReducer
}));
