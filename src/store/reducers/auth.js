import * as types from '../actions/actionTypes'


const initialState = {
    uniqueID: '',
    simplePw: '',
};
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SIMPLE_PW:
            return {
                ...state,
                uniqueID: action.uniqueID
            }
    }
    return state;
}