import Config from '../config/config';
import User from '../models/User';
import UserUtils from '../utils/UserUtils';

const UserService = {
    get: () => {
        return fetch(UserUtils.buildGetRequest(), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    getById: (id:number) => {
        return fetch(UserUtils.buildGetByIdRequest(id), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    delete: (id:number) => {
        return fetch(UserUtils.buildDeleteRequest(id), Config.getHeaders('DELETE')).then(response => {
            return response.json();
        }).then(json => json);
    },
    insert: (user:User) => {
        return fetch(UserUtils.buildInsertRequest(user), Config.getHeaders('POST')).then(response => {
            return response.json();
        }).then(json => json);
    },
    update: (user:User) => {
        return fetch(UserUtils.buildUpdateRequest(user), Config.getHeaders('PUT')).then(response => {
            return response.json();
        }).then(json => json);
    }
}

export default UserService;