import initialStates from '../initialStates';
import {
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAILURE,
} from './profile-actions';

const profileReducer = (state = initialStates.profile, action) => {
    let newState = {};

    switch (action.type) {
        case PROFILE_FETCH_REQUEST:
            newState = Object.assign({}, state, { isLoading: true });
            break;
        case PROFILE_FETCH_SUCCESS:
            newState = Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            });
            break;
        case PROFILE_FETCH_FAILURE:
            newState = Object.assign({}, state, { isLoading: false });
            break;
        default:
            newState = state;
    }
    return newState;
};

export default profileReducer;
