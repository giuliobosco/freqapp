import fetchMock from 'fetch-mock';

import loginMiddleware from './loginMiddleware';
import {
    loginButtonClicked,
    loginSuccessCheck,
    loginErrorCheck,
} from '../reducers/authSlice'
import Config from '../config/config';

const create = () => {
    const store = {
        dispatch: jest.fn(() => { }),
        getState: () => { return { auth: { username: 'hello', password: 'world' } } }
    }
    const next = jest.fn();

    const invoke = (action: any) => loginMiddleware(store)(next)(action)

    return { store, next, invoke };
}

describe('Middleware::loginMiddleware', () => {
    it('should call with casual action', () => {
        const { next, invoke } = create();
        const action = { type: 'Test' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called next with loginButtonClicked', () => {
        fetchMock.mock({
            name: 'route',
            matcher: Config.getApiBase() + 'action/login?username=hello&password=world',
            method: 'POST',
            response: {
                status: 200,
                body: []
            }
        })

        const { next, invoke } = create();
        const action = { type: loginButtonClicked.toString() };
        invoke(action)
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called with loginSuccessCheck', () => {
        const { next, invoke } = create();
        const action = { type: loginSuccessCheck.toString() };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called with loginErrorCheck', () => {
        const { next, invoke } = create();
        const error = 'Error' + Math.random();
        const action = {
            type: loginErrorCheck.toString(),
            payload: error,
        }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action);
    })
})