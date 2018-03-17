import ServiceAbstract from './ServiceAbstract';

class AuthenticationService extends ServiceAbstract {
    authenticate(fbAuthToken) {
        return this.apiCaller.get('auth/facebook?access_token=' + fbAuthToken);
    }
}

export default new AuthenticationService();
