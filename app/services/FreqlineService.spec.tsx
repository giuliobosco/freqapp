import fetchMock from 'fetch-mock';

import Config from '../config/config'
import freqlineService, { 
    statusService, 
    frequenceService,
    micService,
    decibelService
} from './FreqlineService';

describe('Service::FreqlineService', () => {

    const url = Config.getApiBase('action/freqline');

    // testing getApiBase Get freqlineStatus
    it('should call api and return JSON', async () => {
        const body = {
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
                body
            }
        })

        await freqlineService().then(data => {
            expect(data).toEqual(body)
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

describe('Service::frequenceService', () => {

    const name = 'action/generatorFrequence';
    const url = Config.getApiBase(name);

    // testing getApiBase Get freqlineStatus
    it('frequenceService.get(): should call api and return JSON', async () => {
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

        await frequenceService.get().then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('frequenceService.get(): should\'t call thenFunction and should call catchFunction', async () => {
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

        await frequenceService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset();
    })
    
    it('frequenceService.set(): should call api with 0 as frequence', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_0',
            matcher: url+'?frequence=0',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await frequenceService.set(0).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('frequenceService.set(): should call api with 1000 as frequence', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_1000',
            matcher: url+'?frequence=1000',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await frequenceService.set(1000).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })
})

describe('Service::micService', () => {

    const name = 'action/generatorMicTimer';
    const url = Config.getApiBase(name);

    // testing getApiBase Get freqlineStatus
    it('micService.get(): should call api and return JSON', async () => {
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

        await micService.get().then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('micService.get(): should\'t call thenFunction and should call catchFunction', async () => {
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

        await micService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset();
    })
    
    it('micService.set(): should call api with 0 as timer', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_0',
            matcher: url+'?timer=0',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await micService.set(0).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('micService.set(): should call api with 60 as timer', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_60',
            matcher: url+'?timer=60',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await micService.set(60).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })
})

describe('Service::Service', () => {

    const name = 'action/generatorDecibel';
    const url = Config.getApiBase(name);

    // testing getApiBase Get freqlineStatus
    it('decibelService.get(): should call api and return JSON', async () => {
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

        await decibelService.get().then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('decibelService.get(): should\'t call thenFunction and should call catchFunction', async () => {
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

        await decibelService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset();
    })
    
    it('decibelService.set(): should call api with 0 as decibel', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_0',
            matcher: url+'?decibel=0',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await decibelService.set(0).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })

    it('decibelService.set(): should call api with 60 as decibel', async () => {
        const body = { ok: true, }
        fetchMock.mock({
            name: name+'/set _ok_60',
            matcher: url+'?decibel=60',
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await decibelService.set(60).then(data => {
            expect(data).toEqual(body)
            fetchMock.reset();
        })
    })
})