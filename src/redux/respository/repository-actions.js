import { API } from '../../constants/api';

export const REPOSITORIES_FETCH_REQUEST = '@@REPOSITORIES/REPOSITORIES_FETCH_REQUEST';
export const REPOSITORIES_FETCH_SUCCESS = '@@REPOSITORIES/REPOSITORIES_FETCH_SUCCESS';
export const REPOSITORIES_FETCH_FAILURE = '@@REPOSITORIES/REPOSITORIES_FETCH_FAILURE';

export const fetchRepositories = username => ({
    type: REPOSITORIES_FETCH_REQUEST,
    api: API.REPOSITORIES.FETCH,
    username,
});