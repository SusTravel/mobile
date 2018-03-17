import ServiceAbstract from './ServiceAbstract';
import { sessionService } from 'redux-react-native-session';

class BillingService extends ServiceAbstract {
    sendQRCodeResult(id, lon, lat) {
        return sessionService.loadSession().then(token => {
            this.apiCaller.setAuthorizationHeader(token);
            
            let body = {
                'latitude': lat,
                'longitude': lon
            };

            return this.apiCaller.post(`api/place/${id}/visit`, body);
        });
        
    }
}

export default new BillingService();
