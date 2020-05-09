import Config from "../config/config";
import UserGroup from "../models/UserGroup";

const userGroupUrl = 'data/userGroup';
const groupApi = Config.getApiBase(userGroupUrl);

const buildGetRequest = ():string => {
    return groupApi;
}

const buildGetByIdRequest = (id:number):string => {
    return groupApi + '/' + id;
}

const buildDeleteRequest = (id:number):string => {
    return groupApi + '/' + id;
}

const buildInsertRequest = (userGroup:UserGroup):string => {
    let url = groupApi + '?';

    url += 'user=' + userGroup.user.id + '&';
    url += 'group=' + userGroup.group.id;

    return url;
}

const buildUpdateRequest = (userGroup:UserGroup):string => {
    let url = groupApi + '?';
    url += 'id=' + userGroup.id + '&';
    url += 'user=' + userGroup.user.id + '&';
    url += 'group=' + userGroup.group.id;

    return url;
}

export default {
    buildGetRequest,
    buildGetByIdRequest,
    buildDeleteRequest,
    buildInsertRequest,
    buildUpdateRequest,
}