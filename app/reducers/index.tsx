import { combineReducers } from 'redux';

import freqlineStatusReducer from './freqlineStatusSlice';
import netInfoReducer from './netInfoSlice';
import authReducer from './authSlice';

export default combineReducers({
    freqlineStatus: freqlineStatusReducer,
    netInfo: netInfoReducer,
    auth: authReducer
})