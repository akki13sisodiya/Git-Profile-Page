import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from '../sagas/index';

const initialState = {};
const enhancers = [];
export const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
);

const store = () => {
    const createdStore = createStore(
        rootReducer,
        initialState,
        composedEnhancers,
    );
    sagaMiddleware.run(rootSaga);
    return createdStore;
};

export default store;
