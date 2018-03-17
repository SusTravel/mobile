import PathService from '../services/PathService';

const requestPathes = () => {
    return {
        type: 'REQUEST_PATHES'
    };
};

const receivePathes = pathes => {
    return {
        type: 'RECEIVE_PATHES',
        pathes: pathes
    };
};

const fetchPathes = (pointFrom, pointTo) => {
    return async (dispatch) => {
        try {
            dispatch(requestPathes());
            let pathes = (await PathService.getPath(pointFrom, pointTo));
            dispatch(receivePathes(pathes));
        } catch (error) {
            console.log(error);
        }
    }
}

export { fetchPathes };