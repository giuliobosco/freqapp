import fetchMock from 'fetch-mock';
import Config from '../config/config';
import GroupService from './GroupService';

describe('Service::GroupService', () => {
    const apiName = 'data/group';
    const groupApi = Config.getApiBase(apiName);

    const rnd = Math.random();
    const body = [{ data: rnd }]

    it('should call api and return JSON', async () => {
        fetchMock.mock({
            name: apiName + '/get',
            matcher: groupApi,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.get().then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: apiName + '/get_func',
            matcher: groupApi,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await GroupService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON', async () => {
        fetchMock.mock({
            name: apiName + '/getById',
            matcher: groupApi + '/' + rnd,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.getById(rnd).then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: apiName + '/getById_func',
            matcher: groupApi + '/' + rnd,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await GroupService.getById(rnd).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })
})