import fetchMock from 'fetch-mock';

import freqlineMiddleware from './freqlineMiddleware';
import { freqlineStartFetch, statusFetched } from '../../reducers/freqlineSlice';
import Config from '../../config/config';

const create = () => {
    const store = {
        dispatch: jest.fn(),
    }
    const next = jest.fn();

    const invoke = (action: any) => freqlineMiddleware(store)(next)(action);

    return { store, next, invoke };
}

const mock = (action:string) => {
    fetchMock.mock({
        name: 'route/action'+action,
        matcher: Config.getApiBase('action/' + action),
        method: 'GET',
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

describe('Middleware::freqlineMiddleware', () => {

    it('calls test with causal action', () => {
        const { next, invoke } = create()
        const action = { type: 'Test' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })

    it('calls test with freqlineStatusStartCheck action type, should call mock 4 tiems', async () => {
        mock('generatorStatus')
        mock('generatorFrequence')
        mock('generatorMicTimer')
        mock('generatorDecibel')

        const { store, next, invoke } = create()
        const action = { type: freqlineStartFetch.toString() }
        await invoke(action)
        expect(next).toHaveBeenCalledWith(action);
        expect(fetchMock.calls().length).toEqual(4);
    })
})