import freqlineStatusMiddleware from './freqlineStatusMiddleware'
import { freqlineStatusStartCheck, freqlineStatusSuccessCheck, freqlineStatusErrorCheck } from '../components/freqline.component/freqlineStatusSlice';
import fetchMock from 'fetch-mock';
import Config from '../config';

const create = () => {
    const store = {
        dispatch: jest.fn((a) => { console.log(a) }),
    };
    const next = jest.fn();

    const invoke = (action: any) => freqlineStatusMiddleware(store)(next)(action)

    return { store, next, invoke };
}

describe('Middleware::freqlineStatus', () => {

    it('calls test with causal action', () => {
        const { next, invoke } = create()
        const action = { type: 'Test' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with freqlineStatusStartCheck action type', () => {
        fetchMock.mock({
            name: 'route',
            matcher: Config.getApiBase() + 'action/freqline',
            method: 'GET',
            response: {
                status: 200,
                body: {}
            }
        });

        const { next, invoke } = create()
        const action = { type: freqlineStatusStartCheck.toString() }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with freqlineStatusSuccessCheck action type', () => {
        const { next, invoke } = create()
        const action = { type: freqlineStatusSuccessCheck.toString() }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with freqlineStatusErrorCheck action type', () => {
        const { next, invoke } = create()
        const action = { type: freqlineStatusErrorCheck.toString() }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })
})