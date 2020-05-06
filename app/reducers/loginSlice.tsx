import { createSlice } from '@reduxjs/toolkit';

const permisisons:string[] = [];

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    username: '',
    password: '',
    buttonClicked: false,
    error: '',
    permissions: permisisons,
    isLoadingPermissions: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
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
            state.isLoggedIn = false;
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
        },
        loginButtonClicked: state => {
            state.isLoading = true;
            return state;
        },
        permissionsStartCheck: state => {
            state.isLoadingPermissions = true
            return state;
        },
        permissionsErrorCheck: (state, action) => {
            state.isLoadingPermissions = false;
            state.error = action.payload;
            return state;
        },
        permissionsSuccessCheck: (state, action) => {
            state.isLoadingPermissions = false;
            state.permissions = action.payload;
            return state;
        },
        logout: state => {
            state = initialState;
            return state;
        },
    }
})

export const {
    loginStartCheck,
    loginSuccessCheck,
    loginErrorCheck,
    loginUsernameChanged,
    loginPasswordChanged,
    loginButtonClicked,
    permissionsStartCheck,
    permissionsSuccessCheck,
    permissionsErrorCheck,
    logout,
} = loginSlice.actions;

export default loginSlice.reducer;
