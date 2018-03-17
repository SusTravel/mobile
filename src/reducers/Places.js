const initialState = {
    places: [],
    isFetching: false
};

const Places = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_PLACES':
            return {
                ...state,
                isFetching: true
            };
        case 'RECEIVE_PLACES':
            return {
                places: action.places,
                isFetching: false
            };
        default:
            return state;
    }
};

export default Places;
