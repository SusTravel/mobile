const initialState = {
    continents: [],
    isFetching: false
};

const Continents = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_CONTINENTS':
            return {
                ...state,
                isFetching: true
            };
        case 'RECEIVE_CONTINENTS':
            return {
                continents: action.continents,
                isFetching: false
            };
        default:
            return state;
    }
};

export default Continents;
