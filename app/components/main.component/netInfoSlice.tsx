import { createSlice } from '@reduxjs/toolkit';

const netInfoSlice = createSlice({
    name: 'netInfo',
    initialState: {
        isLoading: false,
        isConnected: false,
    },
    reducers: {
        netInfoStartCheck: state => {
            state.isLoading = true;
            return state;
        },
        netInfoSuccessCheck: (state, action) => {
            state.isLoading = false;
            state.isConnected = action.payload.isConnected;

            return state;
        }
    }
})

export const {
    netInfoStartCheck,
    netInfoSuccessCheck,
} = netInfoSlice.actions;

export default netInfoSlice.reducer;