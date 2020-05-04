import netInfoMiddleware from './netInfoMiddleware';
import { netInfoStartCheck } from '../components/main.component/netInfoSlice';

const create = () => {
    const store = {
        dispatch: jest.fn(() => ({})),
    };
    const next = jest.fn();

    const invoke = (action: any) => netInfoMiddleware(store)(next)(action)

    return { store, next, invoke };
}

describe('Middleware::netInfo', () => {

    it('calls test with causal action', () => {
        const { next, invoke } = create()
        const action = { type: 'Test' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with netInfoStartCheck action type', () => {
        const { next, invoke } = create()
        const action = { type: netInfoStartCheck.toString() }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })
})