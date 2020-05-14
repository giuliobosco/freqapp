import { createSlice } from '@reduxjs/toolkit';
import User from '../models/User';

const users:User[] = [];

const initialState = {
    isLoading: false,
    users,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userStartFetch: state => {
            state.isLoading = true;
            return state;
        },
        userSuccessFetch: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
            return state;
        },
        userErrorFetch: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            return state;
        }
    }
})

export const {
    userStartFetch,
    userSuccessFetch,
    userErrorFetch,
} = userSlice.actions;

export default userSlice.reducer;