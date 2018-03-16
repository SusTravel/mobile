const initialState = {
    authenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return { ...state, authenticated: true };
        case 'USER_QUIT':
            return { ...state, authenticated: false };
        default:
            return state;
    }
};

export default authReducer;
