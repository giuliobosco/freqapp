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
        getUsersStart: state => {
            state.isLoading = true;
            return state;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
            return state;
        },
        getUsersError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            return state;
        }
    }
})

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersError,
} = userSlice.actions;

export default userSlice.reducer;