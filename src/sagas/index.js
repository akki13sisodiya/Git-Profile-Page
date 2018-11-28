import { all } from 'redux-saga/effects';
import { profileFetchSaga } from './profile-saga/profile-watcher-saga';
import { repostoriesFetchSaga } from './repository-saga/repository-watcher-saga';

export default function* rootSaga() {
    yield all([
        profileFetchSaga(),
        repostoriesFetchSaga(),
    ]);
}
