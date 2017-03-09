import {combineReducers} from 'redux';

import SignReducer from './sign';

const rootReducer = combineReducers({
    SignReducer: SignReducer
});

export default rootReducer;