import ServiceAbstract from './ServiceAbstract';
import { sessionService } from 'redux-react-native-session';

class ContinentsService extends ServiceAbstract {
    getContinents() {
        return sessionService.loadSession().then(token => {
            this.apiCaller.setAuthorizationHeader(token);
            return this.apiCaller.get('api/continent');
        });
    }
}

export default new ContinentsService();
