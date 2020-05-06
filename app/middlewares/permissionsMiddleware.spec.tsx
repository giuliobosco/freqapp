import fetchMock from 'fetch-mock';

import permissionsMiddleware from './permissionsMiddleware';
import {
    permissionsStartCheck,
    permissionsSuccessCheck,
    permissionsErrorCheck,
} from '../reducers/loginSlice'
import Config from '../config/config';

const create = () => {
    const store = {
        dispatch: jest.fn(() => {}),
    }
    const next = jest.fn();

    const invoke = (action:any) => permissionsMiddleware(store)(next)(action);

    return { store, next, invoke };
}

describe('Middleware::permissionsMiddleware', () => {
    it('should call with casual action', () => {
        const { next, invoke } = create();
        const action = { type: 'Test' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called next with permissionsStartCheck', () => {
        fetchMock.mock({
            name: 'route',
            matcher: Config.getApiBase('action/login/permissions'),
            method: 'GET',
            response: {
                status: 200,
                body: []
            }
        })

        const { next, invoke } = create();
        const action = { type: permissionsStartCheck.toString() };
        invoke(action)
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called with permissionsSuccessCheck', () => {
        const { next, invoke } = create();
        const action = { type: permissionsSuccessCheck.toString() };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called with permissionsErrorCheck', () => {
        const { next, invoke } = create();
        const error = 'Error' + Math.random();
        const action = {
            type: permissionsErrorCheck.toString(),
            payload: error,
        }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action);
    })
})