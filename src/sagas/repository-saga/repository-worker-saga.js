import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { REPOSITORIES_FETCH_FAILURE, REPOSITORIES_FETCH_SUCCESS } from '../../redux/respository/repository-actions';

export function* repositoriesFetchWorkerSaga(action) {
    try {
        const apiWithParams = `${action.api}/${action.username}/repos`;
        const response = yield call(axios.get, apiWithParams);
        yield put({
            type: REPOSITORIES_FETCH_SUCCESS,
            data: response.data,
        });
    } catch (e) {
        // do error action
        yield put({ type: REPOSITORIES_FETCH_FAILURE });
    }
}
