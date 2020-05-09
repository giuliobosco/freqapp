import fetchMock from 'fetch-mock';
import UserUtils from '../utils/UserUtils';
import UserService from './UserService';
import User from '../models/User';

describe('Service::UserService', () => {
    const baseName = 'data/user';
    const body = [{data:true}]
    const rnd = Math.random();
    const id = 1;
    const user:User = {
        id: rnd,
        username: 'a'+rnd,
        password: 'b'+rnd,
        firstname: 'c'+rnd,
        lastname: 'd'+rnd,
        email: 'e'+rnd,
    };

    it('should call api and return JSON', async () => {
        const url = UserUtils.buildGetRequest();

        fetchMock.mock({
            name: baseName + '/get',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await UserService.get().then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        const url = UserUtils.buildGetRequest();

        fetchMock.mock({
            name: baseName + '/get_func',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserService.get().then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON', async () => {
        const url = UserUtils.buildGetByIdRequest(id);

        fetchMock.mock({
            name: baseName + '/getById',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        await UserService.getById(id).then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        const url = UserUtils.buildGetByIdRequest(1);

        fetchMock.mock({
            name: baseName + '/getById_func',
            matcher: url,
            method: 'GET',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserService.getById(id).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON', async () => {
        const url = UserUtils.buildDeleteRequest(id);

        fetchMock.mock({
            name: baseName + '/delete',
            matcher: url,
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        await UserService.delete(id).then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        const url = UserUtils.buildDeleteRequest(1);

        fetchMock.mock({
            name: baseName + '/delete_func',
            matcher: url,
            method: 'DELETE',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserService.delete(id).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON', async () => {
        const url = UserUtils.buildInsertRequest(user);

        fetchMock.mock({
            name: baseName + '/insert',
            matcher: url,
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        await UserService.insert(user).then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        const url = UserUtils.buildInsertRequest(user);

        fetchMock.mock({
            name: baseName + '/insert_func',
            matcher: url,
            method: 'POST',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserService.insert(user).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })

    it('should call api and return JSON', async () => {
        const url = UserUtils.buildUpdateRequest(user);

        fetchMock.mock({
            name: baseName + '/update',
            matcher: url,
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        await UserService.update(user).then(data => {
            expect(data).toEqual(body);
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        const url = UserUtils.buildUpdateRequest(user);

        fetchMock.mock({
            name: baseName + '/update_func',
            matcher: url,
            method: 'PUT',
            response: {
                status: 200,
                body
            }
        })

        const thenFunction = jest.fn();
        const catchFunction = jest.fn();

        await UserService.update(user).then(thenFunction).catch(catchFunction)

        expect(thenFunction).toHaveBeenCalled();
        expect(catchFunction).not.toHaveBeenCalled();

        fetchMock.reset()
    })
})