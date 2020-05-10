import fetchMock from 'fetch-mock';
import UserGroupService from './UserGroupService';
import Group from '../models/Group';
import User from '../models/User';
import UserGroup from '../models/UserGroup';
import UserGroupUtils from '../utils/UserGroupUtils';

describe('Service::UserGroupService', () => {
    const apiName = 'data/userGroup';

    const rnd = Math.random();
    const user:User = {
        id: rnd,
        username: 'a'+rnd,
        password: 'b'+rnd,
        firstname: 'c'+rnd,
        lastname: 'd'+rnd,
        email: 'e'+rnd,
    };
    const group:Group = {
        id: rnd,
        name: 'n'+rnd,
    }
    const userGroup:UserGroup = {
        id: 1,
        user,
        group,
    }
    const body = [{ data: rnd }]

    it('should call api and return JSON (GET)', async () => {
        fetchMock.mock({
            name: apiName + '/get',
            matcher: UserGroupUtils.buildGetRequest(),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.get().then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (GET)', async () => {
        fetchMock.mock({
            name: apiName + '/get_func',
            matcher: UserGroupUtils.buildGetRequest(),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserGroupService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (GET BY ID)', async () => {
        fetchMock.mock({
            name: apiName + '/getById',
            matcher: UserGroupUtils.buildGetByIdRequest(rnd),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.getById(rnd).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (GET BY ID)', async () => {
        fetchMock.mock({
            name: apiName + '/getById_func',
            matcher: UserGroupUtils.buildGetByIdRequest(rnd),
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserGroupService.getById(rnd).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (DELETE)', async () => {
        fetchMock.mock({
            name: apiName + '/delete',
            matcher: UserGroupUtils.buildDeleteRequest(rnd),
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.delete(rnd).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (DELETE)', async () => {
        fetchMock.mock({
            name: apiName + '/delete_func',
            matcher: UserGroupUtils.buildDeleteRequest(rnd),
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserGroupService.delete(rnd).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert',
            matcher: UserGroupUtils.buildInsertRequest(userGroup),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.insert(userGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call api and return JSON (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert_full',
            matcher: UserGroupUtils.buildInsertRequest(userGroup),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.insert(userGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (POST)', async () => {
        fetchMock.mock({
            name: apiName + '/insert_func',
            matcher: UserGroupUtils.buildInsertRequest(userGroup),
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserGroupService.insert(userGroup).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON (PUT)', async () => {
        fetchMock.mock({
            name: apiName + '/update',
            matcher: UserGroupUtils.buildUpdateRequest(userGroup),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.update(userGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call api and return JSON (PUT - full)', async () => {
        fetchMock.mock({
            name: apiName + '/update_full',
            matcher: UserGroupUtils.buildUpdateRequest(userGroup),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        await UserGroupService.update(userGroup).then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction (PUT)', async () => {
        fetchMock.mock({
            name: apiName + '/update_func',
            matcher: UserGroupUtils.buildUpdateRequest(userGroup),
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserGroupService.update(userGroup).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })
})