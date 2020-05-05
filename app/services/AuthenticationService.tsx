import Config from "../config";

const getLoginUrl = () => {
    return Config.getApiBase() + 'action/login';
}

const loginService = (username: string, password: string): Promise<any> => {
    const req = getLoginUrl() + '?username=' + username + '&password=' + password;

    return fetch(req, Config.getHeaders('POST')).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json()
    }).then(json => json);
}

const isLoggedInService = (): Promise<any> => {
    const req = getLoginUrl();

    return fetch(req, Config.getHeaders('GET')).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    }).then(json => json);
}

const getPermissionsService = (): Promise<any> => {
    const req = getLoginUrl() + '/permissions';

    return fetch(req, Config.getHeaders('GET')).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    }).then(json => json);
}

export { loginService, isLoggedInService, getPermissionsService };