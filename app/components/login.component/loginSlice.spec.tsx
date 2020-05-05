import login, { loginStartCheck, loginSuccessCheck, loginErrorCheck, loginUsernameChanged, loginPasswordChanged } from './loginSlice';
import _ from 'lodash';

const initState = {
    isLoading: false,
    isLoggedIn: false,
    username: '',
    password: '',
    buttonClicked: false,
    error: ''
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
        expect(login(undefined, {})).toEqual(initState);
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
})