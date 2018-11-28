import { takeLatest } from 'redux-saga/effects';
import { PROFILE_FETCH_REQUEST } from "../../redux/profile/profile-actions";
import { profileFetchWorkerSaga } from './profile-worker-saga';


export function* profileFetchSaga() {
    yield takeLatest(PROFILE_FETCH_REQUEST, profileFetchWorkerSaga);
}