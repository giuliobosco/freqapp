import UserGroupUtils from "../utils/UserGroupUtils"
import Config from "../config/config"
import UserGroup from "../models/UserGroup";

const UserGroupService = {
    get: () => {
        return fetch(UserGroupUtils.buildGetRequest(), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    getById: (id:number) => {
        return fetch(UserGroupUtils.buildGetByIdRequest(id), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    delete: (id:number) => {
        return fetch(UserGroupUtils.buildDeleteRequest(id), Config.getHeaders('DELETE')).then(response => {
            return response.json();
        }).then(json => json);
    },
    insert: (userGroup:UserGroup) => {
        return fetch(UserGroupUtils.buildInsertRequest(userGroup), Config.getHeaders('POST')).then(response => {
            return response.json();
        }).then(json => json);
    },
    update: (UserGroup:UserGroup) => {
        return fetch(UserGroupUtils.buildUpdateRequest(UserGroup), Config.getHeaders('PUT')).then(response => {
            return response.json();
        }).then(json => json);
    },
}

export default UserGroupService;