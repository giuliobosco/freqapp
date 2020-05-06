import fetchMock from 'fetch-mock';

import isLoggedInMiddleware from './isLoggedInMiddleware';
import {
    loginStartCheck,
    loginSuccessCheck,
    loginErrorCheck
} from '../reducers/authSlice';
import Config from '../config/config';

const create = () => {
    const store = {
        dispatch: jest.fn(() => { }),
    }
    const next = jest.fn();

    const invoke = (action: any) => isLoggedInMiddleware(store)(next)(action);

    return { store, next, invoke };
}

describe('Middleware::isLoggedInMiddleware', () => {

    it('calls test with casual action', () => {
        const { next, invoke } = create();
        const action = { type: 'Test' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called next with loginStartCheck', () => {
        fetchMock.mock({
            name: 'route',
            matcher: Config.getApiBase() + 'action/login',
            method: 'GET',
            response: {
                status: 200,
                body: []
            }
        });

        const { next, invoke } = create();
        const action = { type: loginStartCheck.toString() }
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
        const error = 'Eroor' + Math.random();
        const action = {
            type: loginErrorCheck.toString(),
            payload: error
        }
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })
})