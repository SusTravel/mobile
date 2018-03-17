import axios from 'react-native-axios';

class ApiCallerService {
    constructor() {
        this.apiCaller = axios.create({
            baseURL: 'http://192.168.1.55:8080/sustrav/',
            timeout: 1000
        });
    }

    get(url = '', config = {}) {
        return this.apiCaller.get(url, config);
    }

    post(url = '', data = {}) {
        return this.apiCaller.post(url, data);
    }

    setAuthorizationHeader(token) {
        this.setAuthorizationHeader('X-AUTH-TOKEN', token);
    }

    setHeader(name, value) {
        this.apiCaller.defaults.header.common[name] = value;
    }
}

export default new ApiCallerService;