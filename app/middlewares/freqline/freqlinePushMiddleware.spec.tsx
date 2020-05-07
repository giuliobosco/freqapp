import fetchMock from 'fetch-mock';

import freqlinePushMiddleware from './freqlinePushMiddleware';
import { freqlineStartPush } from '../../reducers/freqlineSlice';
import Config from '../../config/config';

const create = () => {
    const store = {
        getState: () => ({freqline: {
            status: false,
            frequence: 1000,
            micTimer: 60,
            decibel: 50,
        }})
    }
    const next = jest.fn();

    const invoke = (action: any) => freqlinePushMiddleware(store)(next)(action);

    return { store, next, invoke };
}

const mock = (action:string) => {
    fetchMock.mock({
        name: 'route/action'+action,
        matcher: Config.getApiBase('action/' + action),
        method: 'POST',
        response: {
            status: 200,
            body: {
                status: false,
                frequence: 0,
                micTimer: 0,
                decibel: 0,
            }
        }
    })
}

describe('Middleware::freqlinePushMiddleware', () => {

    it('calls test with causal action', () => {
        const { next, invoke } = create()
        const action = { type: 'Test' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with freqlineStartPush action type, should call mock 4 tiems', async () => {
        mock('generatorStatus?status=0')
        mock('generatorFrequence?frequence=1000')
        mock('generatorMicTimer?timer=60')
        mock('generatorDecibel?decibel=50')

        const { next, invoke } = create()
        const action = { type: freqlineStartPush.toString() }
        await invoke(action)
        expect(next).toHaveBeenCalledWith(action);
        expect(fetchMock.calls().length).toEqual(4);
    })
})