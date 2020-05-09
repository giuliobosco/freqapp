import fetchMock from 'fetch-mock';
import Config from '../config/config';
import GroupService from './GroupService';
import Group from '../models/Group';
import GroupUtils from '../utils/GroupUtils';

describe('Service::GroupService', () => {
    const apiName = 'data/group';
    const groupApi = Config.getApiBase(apiName);

    const rnd = Math.random();
    const group:Group = {
        id: rnd,
        name: 'n'+rnd,
    }
    const fullGroup:Group = {
        id: rnd+1,
        name: 'n'+rnd+1,
        parentGroup: group,
    }
    const body = [{ data: rnd }]

    it('should call api and return JSON (GET)', async () => {
        fetchMock.mock({
            name: apiName + '/get',
            matcher: GroupUtils.buildGetRequest(),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.get().then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (GET)', async () => {
        fetchMock.mock({
            name: apiName + '/get_func',
            matcher: GroupUtils.buildGetRequest(),
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

    it('should call api and return JSON (GET BY ID)', async () => {
        fetchMock.mock({
            name: apiName + '/getById',
            matcher: GroupUtils.buildGetByIdRequest(rnd),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.getById(rnd).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (GET BY ID)', async () => {
        fetchMock.mock({
            name: apiName + '/getById_func',
            matcher: GroupUtils.buildGetByIdRequest(rnd),
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

    it('should call api and return JSON (DELETE)', async () => {
        fetchMock.mock({
            name: apiName + '/delete',
            matcher: GroupUtils.buildDeleteRequest(rnd),
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.delete(rnd).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (DELETE)', async () => {
        fetchMock.mock({
            name: apiName + '/delete_func',
            matcher: GroupUtils.buildDeleteRequest(rnd),
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await GroupService.delete(rnd).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert',
            matcher: GroupUtils.buildInsertRequest(group),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.insert(group).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call api and return JSON (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert_full',
            matcher: GroupUtils.buildInsertRequest(fullGroup),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.insert(fullGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert_func',
            matcher: GroupUtils.buildInsertRequest(fullGroup),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await GroupService.insert(fullGroup).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (PUT)', async () => {
        fetchMock.mock({
            name: apiName + '/update',
            matcher: GroupUtils.buildUpdateRequest(group),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.update(group).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call api and return JSON (PUT - full)', async () => {
        fetchMock.mock({
            name: apiName + '/update_full',
            matcher: GroupUtils.buildUpdateRequest(fullGroup),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        await GroupService.update(fullGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (PUT)', async () => {
        fetchMock.mock({
            name: apiName + '/update_func',
            matcher: GroupUtils.buildUpdateRequest(fullGroup),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await GroupService.update(fullGroup).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })
})