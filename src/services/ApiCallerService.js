import axios from 'react-native-axios';

class ApiCallerService {
    constructor() {
        this.apiCaller = axios.create({
            baseURL: 'http://ec2-18-197-37-132.eu-central-1.compute.amazonaws.com:8080/sustrav/',
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
        this.setHeader('X-AUTH-TOKEN', token);
    }

    setHeader(name, value) {
        this.apiCaller.defaults.headers.common[name] = value;
    }
}

export default new ApiCallerService;