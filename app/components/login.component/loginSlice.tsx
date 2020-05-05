import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: '',
        buttonClicked: false,
        error: '',
    },
    reducers: {
        loginStartCheck: state => {
            state.isLoading = true;
            return state;
        },
        loginSuccessCheck: state => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.password = ''
            return state;
        },
        loginErrorCheck: (state, action) => {
            state.isLoading = false;
            state.isLoading = false;
            state.error = action.payload;
            return state;
        },
        loginUsernameChanged: (state, action) => {
            state.username = action.payload;
            return state;
        },
        loginPasswordChanged: (state, action) => {
            state.password = action.payload;
            return state;
        }
    }
})

export const {
    loginStartCheck,
    loginSuccessCheck,
    loginErrorCheck,
    loginUsernameChanged,
    loginPasswordChanged,
} = loginSlice.actions;

export default loginSlice.reducer;
