import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer
    );
}