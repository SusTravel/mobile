const initialState = {
    location: {},
    isFetching: false
};

const Location = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOCATION':
            return {
                ...state,
                isFetching: true
            };
        case 'RECEIVE_LOCATION':
            return {
                location: action.location,
                isFetching: false
            };
        default:
            return state;
    }
};

export default Location;
