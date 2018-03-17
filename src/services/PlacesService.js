import ServiceAbstract from './ServiceAbstract';
import { sessionService } from 'redux-react-native-session';

class PlacesService extends ServiceAbstract {
    getPlaces(lon, lat, radius) {
        return sessionService.loadSession().then(token => {
            this.apiCaller.setAuthorizationHeader(token);
            
            return this.apiCaller.get(`api/place?latitude=${lon}&longitude=${lat}&radius=${radius}`);
        });
    }
}

export default new PlacesService();
