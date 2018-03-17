import PlacesService from '../services/PlacesService';

const requestPlaces = () => {
    return {
        type: 'REQUEST_PLACES'
    };
};

const receivePlaces = places => {
    return {
        type: 'RECEIVE_PLACES',
        places: places
    };
};

const fetchPlaces = (lon, lat, radius = 100) => {
    return async (dispatch) => {
        try {
            dispatch(requestPlaces());
            let places = (await PlacesService.getPlaces(lon, lat, radius)).data;
            dispatch(receivePlaces(places));
        } catch (error) {
            console.log(error);
        }
    }
}

export { fetchPlaces };