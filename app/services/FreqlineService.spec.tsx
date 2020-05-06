import fetchMock from 'fetch-mock';

import Config from '../config/config'
import freqlineService, { statusService } from './FreqlineService';

describe('Service::FreqlineService', () => {

    const url = Config.getApiBase('action/freqline');

    // testing getApiBase Get freqlineStatus
    it('should call api and return JSON', () => {
        const response = {
            freqline: true,
            serial: true,
            db: true
        }

        fetchMock.mock({
            name: 'action/freqline/ok',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body: response
            }
        })

        freqlineService().then(data => {
            expect(data).toEqual(response)
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: 'action/freqline/ok_methods',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body: {
                    freqline: true,
                    serial: true,
                    db: true
                }
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await freqlineService().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and retrive an error', () => {
        const status:number = 400;

        fetchMock.mock({
            name: 'action/freqline/no',
            matcher: url,
            method: 'GET',
            response: {
                status: status,
                body: []
            }
        })

        freqlineService().catch(error => {
            expect(error.status).toEqual(status);
            fetchMock.reset();
        })
    })

    it('should\'t call thenFunction and should call catchFunction', async () => {
        fetchMock.mock({
            name: 'action/freqline/not_methods',
            matcher: url,
            method: 'GET',
            response: {
                status: 400,
                body: []
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await freqlineService().then(thenFunction).catch(catchFunction)

        expect(thenFunction).not.toHaveBeenCalled();
        expect(catchFunction).toHaveBeenCalled();

        fetchMock.reset();
    })
})

describe('Service::statusService', () => {

    const name = 'action/generatorStatus';
    const url = Config.getApiBase(name);

    // testing getApiBase Get freqlineStatus
    it('statusService.get(): should call api and return JSON', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/get _ok',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await statusService.get().then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('statusService.get(): should\'t call thenFunction and should call catchFunction', async () => {
        fetchMock.mock({
            name: name+'/get _ok_func',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body: {}
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await statusService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset();
    })
    
    it('statusService.set(): should call api with 0 as status', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_0',
            matcher: url+'?status=0',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await statusService.set(false).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('statusService.set(): should call api with 1 as status', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_1',
            matcher: url+'?status=1',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await statusService.set(true).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })
})