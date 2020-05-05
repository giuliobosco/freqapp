import { combineReducers } from 'redux';

import freqlineStatusReducer from '../components/freqline.component/freqlineStatusSlice';
import netInfoReducer from '../components/main.component/netInfoSlice';
import loginReducer from '../components/login.component/loginSlice';

export default combineReducers({
    freqlineStatus: freqlineStatusReducer,
    netInfo: netInfoReducer,
    login: loginReducer
})