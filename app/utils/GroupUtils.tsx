import Config from "../config/config";
import Group from "../models/Group";

const groupUrl = 'data/group';
const groupApi = Config.getApiBase(groupUrl);

const buildGetRequest = ():string => {
    return groupApi;
}

const buildGetByIdRequest = (id:number):string => {
    return groupApi + '/' + id;
}

const buildDeleteRequest = (id:number):string => {
    return groupApi + '/' + id;
}

const buildInsertRequest = (group:Group):string => {
    let url = groupApi + '?';
    url += 'name=' + group.name
    if (group.parentGroup != null) {
        url += '&parentGroup=' + group.parentGroup.id;
    }

    return url;
}

const buildUpdateRequest = (group:Group):string => {
    let url = groupApi + '?';
    url += 'id=' + group.id + '&';
    url += 'name=' + group.name;
    if (group.parentGroup != null) {
        url += '&parentGroup=' + group.parentGroup.id;
    }

    return url;
}

export default {
    buildGetRequest,
    buildGetByIdRequest,
    buildDeleteRequest,
    buildInsertRequest,
    buildUpdateRequest,
}