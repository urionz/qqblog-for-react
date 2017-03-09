export const SHOW_SIGN = 'SHOW_SIGN';
export const HIDE_SIGN = 'HIDE_SIGN';

export function signShow(){
    return {
        type: SHOW_SIGN
    }
}

export function signHide() {
    return {
        type: HIDE_SIGN
    }
}