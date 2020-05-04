import { createSlice } from '@reduxjs/toolkit';
import FreqlineStatus from '../../models/FreqlineStatus';

const freqlineStatusSlice = createSlice({
    name: 'freqlineStatus',
    initialState: {
        freqlineOk: false,
        serialOk: false,
        dbOk: false,
        isLoading: false,
        error: '',
    },
    reducers: {
        freqlineStatusStartCheck: state => {
            state.isLoading = true;
            return state;
        },
        freqlineStatusSuccessCheck: (state, action) => {
            state.isLoading = false;
            if (action.payload == null) {
                state.error = 'no data';
                return state;
            }

            const freqlineStatus: FreqlineStatus = action.payload;

            if (freqlineStatus.freqline != null) {
                state.freqlineOk = freqlineStatus.freqline;
            }
            if (freqlineStatus.serial != null) {
                state.serialOk = freqlineStatus.serial;
            }
            if (freqlineStatus.db != null) {
                state.dbOk = freqlineStatus.db;
            }

            return state;
        },
        freqlineStatusErrorCheck: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            return state;
        }
    }
});

export const { 
    freqlineStatusStartCheck, 
    freqlineStatusSuccessCheck, 
    freqlineStatusErrorCheck, 
} = freqlineStatusSlice.actions;

export default freqlineStatusSlice.reducer;