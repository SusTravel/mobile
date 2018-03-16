const userAuth = type => {
    return {
        type: 'USER_AUTHENTICATED'
    };
};

const userQuit = type => {
    return {
        type: 'USER_QUIT'
    };
};

export { userAuth, userQuit };
