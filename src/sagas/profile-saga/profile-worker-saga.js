import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS } from '../../redux/profile/profile-actions';

export function* profileFetchWorkerSaga(action) {
    try {
        const apiWithParams = `${action.api}/${action.username}`;
        const response = yield call(axios.get, apiWithParams);
        yield put({
            type: PROFILE_FETCH_SUCCESS,
            data: response.data,
        });
    } catch (e) {
        // do error action
        yield put({ type: PROFILE_FETCH_FAILURE });
    }
}