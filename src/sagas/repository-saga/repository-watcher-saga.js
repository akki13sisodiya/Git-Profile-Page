import { takeLatest } from 'redux-saga/effects';
import { REPOSITORIES_FETCH_REQUEST } from "../../redux/respository/repository-actions";
import { repositoriesFetchWorkerSaga } from './repository-worker-saga';


export function* repostoriesFetchSaga() {
    yield takeLatest(REPOSITORIES_FETCH_REQUEST, repositoriesFetchWorkerSaga);
}
