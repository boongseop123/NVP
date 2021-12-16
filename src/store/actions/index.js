import * as types from './actionTypes';
import { request } from '../../utils/axios';

const INDIVIDUAL_URL = "/api/individual";

export function loginSimplwPw(dataToSubmit) {

    const data = request("GET", INDIVIDUAL_URL
        + "?uniqueID=" + dataToSubmit.uniqueID
        + "&simplePw=" + dataToSubmit.simplePw);
    return {
        type: types.LOGIN_SIMPLE_PW,
        payload: data,
        uniqueID: dataToSubmit.uniqueID
    }

};

