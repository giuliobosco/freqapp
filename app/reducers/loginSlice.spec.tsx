import _ from 'lodash';

import login, {
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
} from './loginSlice';

const permisisons:string[] = [];
const initState = {
    isLoading: false,
    isLoggedIn: false,
    username: '',
    password: '',
    buttonClicked: false,
    error: '',
    permissions: permisisons,
}

const getRandomUsernameAndPassowrd = () => {
    const username = 'username' + Math.random();
    const password = 'password' + Math.random();

    return {
        username,
        password,
    }
}

describe('Reducer::login', () => {
    it('should handle reducer state', () => {
        expect(login(undefined, { type: null })).toEqual(initState);
    })

    it('should handle loginStartCheck', () => {
        const state = _.clone(initState);
        state.isLoading = true;

        expect(login(undefined, {
            type: loginStartCheck,
        })).toEqual(state);
    })

    it('should handle loginSuccessCheck', () => {
        const previusState = _.clone(initState);
        previusState.username = 'admin';
        previusState.password = 'password';
        previusState.isLoading = true;

        const state = _.clone(initState);
        state.isLoggedIn = true;
        state.username = previusState.username;

        expect(login(previusState, {
            type: loginSuccessCheck,
        })).toEqual(state);
    })

    it('should handle loginErrorCheck', () => {
        const previusState = _.clone(initState);
        previusState.username = 'admin';
        previusState.password = 'password';
        previusState.isLoading = true;

        const error = 'Error' + Math.random();

        const state = _.clone(previusState);
        state.isLoading = false;
        state.error = error;

        expect(login(previusState, {
            type: loginErrorCheck,
            payload: error,
        })).toEqual(state);
    })

    it('should handle loginUsernameChanged', () => {
        const { username } = getRandomUsernameAndPassowrd()
        const state = _.clone(initState);
        state.username = username;

        expect(login(undefined, {
            type: loginUsernameChanged,
            payload: username,
        })).toEqual(state);
    })

    it('should handle loginUsernameChange with password inserted before', () => {
        const { username, password } = getRandomUsernameAndPassowrd();

        const previousState = _.clone(initState);
        previousState.password = password;

        const state = _.clone(previousState);
        state.username = username;

        expect(login(previousState, {
            type: loginUsernameChanged,
            payload: username
        })).toEqual(state);
    })

    it('should handle loginPasswordChange', () => {
        const { password } = getRandomUsernameAndPassowrd();
        const state = _.clone(initState);
        state.password = password;

        expect(login(undefined, {
            type: loginPasswordChanged,
            payload: password,
        })).toEqual(state);
    })

    it('should handle loginPasswordChange with username inserted before', () => {
        const { username, password } = getRandomUsernameAndPassowrd();

        const previousState = _.clone(initState);
        previousState.username = username;

        const state = _.clone(previousState)
        state.password = password;

        expect(login(previousState, {
            type: loginPasswordChanged,
            payload: password
        })).toEqual(state);
    })

    it('should handle loginButtonClicked', () => {
        const state = _.clone(initState);
        state.isLoading = true;

        expect(login(undefined, {
            type: loginButtonClicked,
        })).toEqual(state);
    })

    it('should handle permissionStartCheck', () => {
        const state = _.clone(initState);
        state.isLoading = true;

        expect(login(undefined, {
            type: permissionsStartCheck,
        })).toEqual(state);
    })

    it('should handle permissionSuccessCheck', () => {
        const previusState = _.clone(initState);
        previusState.isLoading = true;
        
        const permissions = ['p1'+Math.random(), 'p2'+Math.random()];
        const state = _.clone(initState);
        state.permissions = permissions;

        expect(login(previusState, {
            type: permissionsSuccessCheck,
            payload: permissions,
        })).toEqual(state);
    })

    it('should handle permissionsErrorCheck', () => {
        const previusState = _.clone(initState);
        previusState.isLoading = true;

        const error = 'Error'+Math.random();
        const state = _.clone(initState);
        state.error = error;

        expect(login(previusState, {
            type: permissionsErrorCheck,
            payload: error,
        })).toEqual(state);
    })

    it('should handle logout', () => {
        const state = _.clone(initState);
        state.isLoading = false;
        state.username = 'username';
        state.password = 'password';
        state.permissions = ['p0', 'p1'];

        expect(login(state, {
            type: logout,
        })).toEqual(initState);
    })
})