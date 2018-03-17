import ApiCaller from './ApiCallerService';

class ServiceAbstract {
    apiCaller;

    constructor() {
        if (new.target === ServiceAbstract) {
            throw new TypeError("Can't create abstract instance");
        }

        this.apiCaller = ApiCaller;
    }
}

export default ServiceAbstract;