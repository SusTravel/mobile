const initialState = {
    pathes: [],
    isFetching: false
};

const Pathes = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_PATHES':
            return {
                ...state,
                isFetching: true
            };
        case 'RECEIVE_PATHES':
            return {
                pathes: action.pathes,
                isFetching: false
            };
        default:
            return state;
    }
};

export default Pathes;
