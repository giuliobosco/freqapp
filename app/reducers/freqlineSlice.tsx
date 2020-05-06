import { createSlice } from '@reduxjs/toolkit';

const freqlineSlice = createSlice({
    name: 'freqline',
    initialState: {
        status: false,
        frequence: 0,
        micTimer: 0,
        decibel: 0,
    },
    reducers: {
        freqlineStartFetch: state => {
            return state;
        },
        statusFetched: (state, action) => {
            state.status = action.payload;
            return state;
        },
        frequenceFetched: (state, action) => {
            state.frequence = action.payload;
            return state;
        },
        micTimerFetched: (state, action) => {
            state.micTimer = action.payload;
            return state;
        },
        decibelFetched: (state, action) => {
            state.decibel = action.payload;
            return state;
        },
        updateStatus: state => {
            return state;
        },
        updateFrequence: state => {
            return state;
        },
        updateMicTimer: state => {
            return state;
        },
        updateDecibel: state => {
            return state;
        }
    }
})

export const {
    freqlineStartFetch,
    statusFetched,
    frequenceFetched,
    micTimerFetched,
    decibelFetched,
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
} = freqlineSlice.actions;

export default freqlineSlice.reducer;
