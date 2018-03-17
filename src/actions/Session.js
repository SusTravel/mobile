import { sessionService } from 'redux-react-native-session';
import AuthenticationService from '../services/AuthenticationService';

const login = fbAuthToken => {
    return async dispatch => {
        try {
            let data = await AuthenticationService.authenticate(fbAuthToken);
            let token = data.data['X-AUTH-TOKEN'];

            let user = data.data.user;

            sessionService.saveSession(token);
            sessionService.saveUser(user);
        } catch (err) {
            console.log(err);
        }
    };
};

export { login };
