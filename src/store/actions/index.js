import * as types from './actionTypes';
import { request } from '../../utils/axios';

const USER_URL = "/api/user";

export function loginSimplwPw(dataToSubmit) {

    const data = request("GET", USER_URL
        + "?serial_number=" + dataToSubmit.uniqueID
        + "&password=" + dataToSubmit.simplePw);
    return {
        type: types.LOGIN_SIMPLE_PW,
        payload: data,
        uniqueID: dataToSubmit.uniqueID
    }

};

export function registerUser(dataToSubmit) {
    const data = request("POST", USER_URL, dataToSubmit)

    return {
        type: types.REGISTER_USER,
        payload: data
    }
}

