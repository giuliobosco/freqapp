import { combineReducers } from 'redux';

import freqlineStatusReducer from '../components/freqline.component/freqlineStatusSlice';
import netInfoReducer from '../components/main.component/netInfoSlice';

export default combineReducers({
    freqlineStatus: freqlineStatusReducer,
    netInfo: netInfoReducer,
})