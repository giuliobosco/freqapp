import { combineReducers } from 'redux';

import freqlineStatusReducer from './freqlineStatusSlice';
import netInfoReducer from './netInfoSlice';
import loginReducer from './loginSlice';

export default combineReducers({
    freqlineStatus: freqlineStatusReducer,
    netInfo: netInfoReducer,
    login: loginReducer
})