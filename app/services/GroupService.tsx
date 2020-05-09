import Config from "../config/config"
import GroupUtils from "../utils/GroupUtils";
import Group from "../models/Group";

const GroupService = {
    get: () => {
        return fetch(GroupUtils.buildGetRequest(), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    getById: (id:number) => {
        return fetch(GroupUtils.buildGetByIdRequest(id), Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    delete: (id:number) => {
        return fetch(GroupUtils.buildDeleteRequest(id), Config.getHeaders('DELETE')).then(response => {
            return response.json();
        }).then(json => json);
    },
    insert: (group:Group) => {
        return fetch(GroupUtils.buildInsertRequest(group), Config.getHeaders('POST')).then(response => {
            return response.json();
        }).then(json => json);
    },
    update: (group:Group) => {
        return fetch(GroupUtils.buildUpdateRequest(group), Config.getHeaders('PUT')).then(response => {
            return response.json();
        }).then(json => json);
    }
}

export default GroupService;