import Config from "../config/config";

const getLoginUrl = () => {
    return Config.getApiBase('action/login');
}

const loginService = (username: string, password: string): Promise<any> => {
    const params: string = '?username=' + username + '&password=' + password;
    const req = getLoginUrl() + params;

    return fetch(req, Config.getHeaders('POST')).then(response => {
        return response.json()
    }).then(json => json);
}

const isLoggedInService = (): Promise<any> => {
    const req = getLoginUrl();

    return fetch(req, Config.getHeaders('GET')).then(response => {
        return response.json();
    }).then(json => json);
}

const getPermissionsService = (): Promise<any> => {
    const req = getLoginUrl() + '/permissions';

    return fetch(req, Config.getHeaders('GET')).then(response => {
        return response.json();
    }).then(json => json);
}

export { loginService, isLoggedInService, getPermissionsService };