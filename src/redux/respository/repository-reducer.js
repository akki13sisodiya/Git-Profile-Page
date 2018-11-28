import initialStates from '../initialStates';
import {
    REPOSITORIES_FETCH_REQUEST,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_FAILURE,
} from './repository-actions';

const repositoryReducer = (state = initialStates.repository, action) => {
    let newState = {};

    switch (action.type) {
        case REPOSITORIES_FETCH_REQUEST:
            newState = Object.assign({}, state, { isLoading: true });
            break;
        case REPOSITORIES_FETCH_SUCCESS:
            newState = Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            });
            break;
        case REPOSITORIES_FETCH_FAILURE:
            newState = Object.assign({}, state, { isLoading: false });
            break;
        default:
            newState = state;
    }
    return newState;
};

export default repositoryReducer;
