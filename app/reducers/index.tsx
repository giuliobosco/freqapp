import { combineReducers } from 'redux';
import freqlineStatusReducer from '../components/freqline.component/freqlineStatusSlice';

export default combineReducers({
    freqlineStatus: freqlineStatusReducer,
})