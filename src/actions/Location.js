import { fetchPlaces } from './Places';

const requestLocation = () => {
    return {
        type: 'REQUEST_LOCATION'
    };
};

const receiveLocation = location => {
    return {
        type: 'RECEIVE_LOCATION',
        location: location
    };
};

const fetchLocation = () => {
    return async dispatch => {
        try {
            dispatch(requestLocation());

            navigator.geolocation.getCurrentPosition(
                response => {
                    dispatch(receiveLocation(response));
                    let coords = response.coords;
                    dispatch(fetchPlaces(coords.longitude, coords.latitude))
                },
                reject => {}
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export { fetchLocation };
