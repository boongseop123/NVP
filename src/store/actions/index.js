import * as types from './actionTypes';

export function loginSimplwPw(inputPw) {
    return {
        type: types.LOGIN_SIMPLE_PW,
        payload: inputPw
    }

};

