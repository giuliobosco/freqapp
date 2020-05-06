import fetchMock from 'fetch-mock';

import logoutMiddleware from './logoutMiddleware';
import { logout } from '../reducers/loginSlice';
import Config from '../config/config';

const create = () => {
    const next = jest.fn();

    const invoke = (action: any) => logoutMiddleware()(next)(action)

    return { next, invoke };
}

describe('Middleware::loginMiddleware', () => {
    it('should call with casual action', () => {
        const { next, invoke } = create();
        const action = { type: 'Test' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    })

    it('should be called next with logout', () => {
        fetchMock.mock({
            name: 'route',
            matcher: Config.getApiBase('action/logout'),
            method: 'GET',
            response: {
                status: 200,
                body: []
            }
        })

        const { next, invoke } = create();
        const action = { type: logout.toString() };
        invoke(action)
        expect(next).toHaveBeenCalledWith(action);
    })
})