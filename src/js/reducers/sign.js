import {SHOW_SIGN, HIDE_SIGN} from '../actions'

const defaultState = {
    SignShow: false
};

export default function SignReducer(state = defaultState, action){
    switch(action.type){
        case SHOW_SIGN:
            return {
                ...state
            };
            break;
        case HIDE_SIGN:
            return {
                ...state,
            };
            break;
        default:
            return state;
    }
}