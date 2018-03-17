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
                },
                reject => {}
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export { fetchLocation };
