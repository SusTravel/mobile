import ContinentsService from '../services/ContinentsService';

const requestContinents = () => {
    return {
        type: 'REQUEST_CONTINENTS'
    };
};

const receiveContinents = continents => {
    return {
        type: 'RECEIVE_CONTINENTS',
        continents: continents
    };
};

const fetchContinents = () => {
    return async (dispatch) => {
        try {
            dispatch(requestContinents());
            continents = (await ContinentsService.getContinents()).data;
            dispatch(receiveContinents(continents));
        } catch (error) {
            console.log(error);
        }
    }
}

export { fetchContinents };