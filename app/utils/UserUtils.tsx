import User from "../models/User";
import Config from "../config/config";

const userUrl = 'data/user';
const userApi = Config.getApiBase(userUrl);
const salt = 'salt';
const favoriteGenerator = 1;

const buildGetRequest = ():string => {
    return userApi;
}

const buildGetByIdRequest = (id:number):string => {
    return userApi + '/' + id;
}

const buildDeleteRequest = (id:number):string => {
    return userApi + '/' + id;
}

const buildInsertRequest = (user:User):string => {
    let url = userApi + '?'
    url += 'username=' + user.username + '&';
    url += 'password=' + user.password + '&';
    url += 'salt='+ salt +'&';
    url += 'firstname=' + user.firstname + '&';
    url += 'lastname=' + user.lastname + '&';
    url += 'email=' + user.email + '&';
    url += 'favoriteGenerator='+favoriteGenerator;

    return url;
}

const buildUpdateRequest = (user:User):string => {
    let url = userApi + '?';

    url += 'id=' + user.id + '&';
    url += 'username=' + user.username + '&';
    url += 'password=' + user.password + '&';
    url += 'salt=' + salt + '&';
    url += 'firstname=' + user.firstname + '&';
    url += 'lastname=' + user.lastname + '&';
    url += 'email=' + user.email + '&';
    url += 'favoriteGenerator=' + favoriteGenerator;

    return url;
}

export default { 
    buildInsertRequest, 
    buildGetByIdRequest, 
    buildDeleteRequest,
    buildGetRequest,
    buildUpdateRequest,
};