import { sessionService } from 'redux-react-native-session';
import AuthenticationService from '../services/AuthenticationService';

const login = fbAuthToken => {
    return async dispatch => {
        try {
            let data = (await AuthenticationService.authenticate(fbAuthToken)).data;

            console.log('response', data);
        } catch (err) {
            console.log(err);
        }
    };
};

export { login };
