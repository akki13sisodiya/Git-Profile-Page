import { API } from '../../constants/api';

export const PROFILE_FETCH_REQUEST = '@@profile/PROFILE_FETCH_REQUEST';
export const PROFILE_FETCH_SUCCESS = '@@profile/PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_FAILURE = '@@profile/PROFILE_FETCH_FAILURE';

export const fetchProfile = username => ({
    type: PROFILE_FETCH_REQUEST,
    api: API.PROFILE.FETCH,
    username,
});