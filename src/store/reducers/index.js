import { combineReducers } from 'redux';
import authReducer from './Auth';
const rootReducers = combineReducers({
    authReducer
});

export default authReducer;