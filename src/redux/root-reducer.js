import { combineReducers } from 'redux';
import profile from './profile/profile-reducer';
import repository from './respository/repository-reducer';

export default combineReducers({
        profile,
        repository,
});
