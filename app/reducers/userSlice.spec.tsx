import _ from 'lodash';

import user, {
    userStartFetch,
    userSuccessFetch,
    userErrorFetch,
} from './userSlice';
import User from '../models/User';

const users:User[] = []
const usersMock:User[] = [
    {
        id: 0,
        username: 'username0',
        password: 'password0',
        firstname: 'firstname0',
        lastname: 'lastname0',
        email: 'email0',
    },
    {
        id: 1,
        username: 'username1',
        password: 'password1',
        firstname: 'firstname1',
        lastname: 'lastname1',
        email: 'email1',
    }
];

const initialState = {
    isLoading: false,
    users,
    error: '',
}

describe('Reducer::user', () => {
    it ('should handle reducer state', () => {
        expect(user(undefined, { type: null})).toEqual(initialState);
    })

    it('should handle userStartFetch', () => {
        const state = _.clone(initialState);
        state.isLoading = true;

        expect(user(undefined, {
            type: userStartFetch,
        })).toEqual(state);
    })

    it('should handle userSuccessFetch', () => {
        const previusState = _.clone(initialState);
        previusState.isLoading = true;

        const state = _.clone(initialState);
        state.users = usersMock;

        expect(user(previusState, {
            type: userSuccessFetch,
            payload: usersMock,
        })).toEqual(state);
    })

    it('should handle userErrorFetch', () => {
        const previusState = _.clone(initialState);
        previusState.isLoading = true;

        const error = 'Error'+Math.random();
        const state = _.clone(initialState);
        state.error = error;

        expect(user(previusState, {
            type: userErrorFetch,
            payload: error,
        })).toEqual(state);
    })
})