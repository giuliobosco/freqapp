import fetchMock from 'fetch-mock';

import Config from '../config/config';
import { loginService, isLoggedInService, getPermissionsService, logoutService } from './AuthenticationService';

describe('Service::AuthenticationService::loginService', () => {

    const body = {
        status: 200,
        message: "ok"
    }
    const err_status = 401;

    const ok_url = Config.getApiBase('action/login?username=admin&password=123qwe');
    const err_url = Config.getApiBase('action/login?username=hello&password=world');

    const name = 'loginService';

    // testing loginService
    it('should login and return 200 OK', async () => {

        fetchMock.mock({
            name: name + '/ok',
            matcher: ok_url,
            method: 'POST',
            response: body,
        })

        await loginService('admin', '123qwe').then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: name + '/ok_func',
            matcher: ok_url,
            method: 'POST',
            response: body,
        })

        const thenFunc = jest.fn();
        const catchFunc = jest.fn();

        await loginService('admin', '123qwe').then(thenFunc).catch(catchFunc);

        expect(thenFunc).toHaveBeenCalled();
        expect(catchFunc).not.toHaveBeenCalled();

        fetchMock.reset();
    })

    it('should\'t login and return 401', async () => {
        fetchMock.mock({
            name: name + '/err',
            matcher: err_url,
            method: 'POST',
            response: {
                status: err_status,
                body: [],
            },
        })

        await loginService('hello', 'world').catch(error => {
            expect(error.status).toEqual(err_status);
            fetchMock.reset();
        })
    })
})

describe('Service::AuthenticationService::isLoggedInService', () => {

    const body = {
        status: 200,
        isLoggedIn: true
    }
    const err_status = 401;

    const ok_url = Config.getApiBase('action/login');
    const err_url = Config.getApiBase('action/login');

    const name = 'isLoggedIn';
    const req_type = 'GET';

    // testing loginService
    it('should return 200 OK', async () => {

        fetchMock.mock({
            name: name + '/ok',
            matcher: ok_url,
            method: req_type,
            response: body,
        })

        await isLoggedInService().then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: name + '/ok_func',
            matcher: ok_url,
            method: req_type,
            response: body,
        })

        const thenFunc = jest.fn();
        const catchFunc = jest.fn();

        await isLoggedInService().then(thenFunc).catch(catchFunc);

        expect(thenFunc).toHaveBeenCalled();
        expect(catchFunc).not.toHaveBeenCalled();

        fetchMock.reset();
    })

    it('should return 401', async () => {
        fetchMock.mock({
            name: name + '/err',
            matcher: err_url,
            method: req_type,
            response: {
                status: err_status,
                body: [],
            },
        })

        await isLoggedInService().catch(error => {
            expect(error.status).toEqual(err_status);
            fetchMock.reset();
        })
    })
})

describe('Service::AuthenticationService::getPermissionsService', () => {

    const body = {
        status: 200,
        isLoggedIn: true,
        permissions: ['admin', 'user'],
    }
    const err_status = 401;

    const ok_url = Config.getApiBase('action/login/permissions');
    const err_url = Config.getApiBase('action/login/permissions');

    const name = 'getPermissions';
    const req_type = 'GET';

    // testing loginService
    it('should return 200 OK and the list of the permission', async () => {

        fetchMock.mock({
            name: name + '/ok',
            matcher: ok_url,
            method: req_type,
            response: body,
        })

        await getPermissionsService().then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: name + '/ok_func',
            matcher: ok_url,
            method: req_type,
            response: body,
        })

        const thenFunc = jest.fn();
        const catchFunc = jest.fn();

        await getPermissionsService().then(thenFunc).catch(catchFunc);

        expect(thenFunc).toHaveBeenCalled();
        expect(catchFunc).not.toHaveBeenCalled();

        fetchMock.reset();
    })

    it('should return 401', async () => {
        fetchMock.mock({
            name: name + '/err',
            matcher: err_url,
            method: req_type,
            response: {
                status: err_status,
                body: [],
            },
        })

        await getPermissionsService().catch(error => {
            expect(error.status).toEqual(err_status);
            fetchMock.reset();
        })
    })
})

describe('Service::AuthenticationService::logoutService', () => {

    const body = {
        status: 200,
        body: []
    }

    const ok_url = Config.getApiBase('action/logout');

    const name = 'logout';
    const req_type = 'GET';

    // testing loginService
    it('should return 200 OK', async () => {

        fetchMock.mock({
            name: name + '/ok',
            matcher: ok_url,
            method: req_type,
            response: {
                status: 200,
                body
            },
        })

        await logoutService().then(data => {
            expect(data).toEqual(body);
            fetchMock.reset();
        })
    })

    it('should call thenFunction and should\'t call catchFunction', async () => {
        fetchMock.mock({
            name: name + '/ok_func',
            matcher: ok_url,
            method: req_type,
            response: body,
        })

        const thenFunc = jest.fn();
        const catchFunc = jest.fn();

        await logoutService().then(thenFunc).catch(catchFunc);

        expect(thenFunc).toHaveBeenCalled();
        expect(catchFunc).not.toHaveBeenCalled();

        fetchMock.reset();
    })
})