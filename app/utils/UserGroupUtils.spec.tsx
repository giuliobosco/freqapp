import Config from "../config/config"
import UserGroupUtils from "./UserGroupUtils";
import Group from "../models/Group";
import User from "../models/User";
import UserGroup from "../models/UserGroup";

describe('Utils::UserGroupUtils', () => {
    const userGroupApi = Config.getApiBase('data/userGroup');
    const rnd: number = Math.random();

    const group:Group = {
        id: 1,
        name: 'a' + rnd,
    }
    const user:User = {
        id: 1,
        username: 'a' + rnd,
        password: 'b'+rnd,
        email: 'c'+rnd,
        firstname: 'd'+rnd,
        lastname: 'e'+rnd,
    }
    const userGroup:UserGroup = {
        id: 1,
        user,
        group,
    }

    it('should return the get api url with parameters', () => {
        expect(UserGroupUtils.buildGetRequest()).toEqual(userGroupApi);
    })

    it('should return the getById api url with parameters', () => {
        const rnd: number = Math.random();
        const url = userGroupApi + '/' + rnd;

        expect(UserGroupUtils.buildGetByIdRequest(rnd)).toEqual(url);
    })

    it('should return the delete api url with parameters', () => {
        const rnd: number = Math.random();
        const url = userGroupApi + '/' + rnd;

        expect(UserGroupUtils.buildDeleteRequest(rnd)).toEqual(url);
    })

    it('should return the insert api url with parameters', () => {

        const url = userGroupApi + '?user=' + userGroup.user.id + '&group=' + userGroup.group.id;

        expect(UserGroupUtils.buildInsertRequest(userGroup)).toEqual(url);
    })

    it('should return the update api url with parameters', () => {
        const rnd: number = Math.random();

        const url = userGroupApi + '?id=' + userGroup.id + '&user=' + userGroup.user.id + '&group=' + userGroup.group.id;

        expect(UserGroupUtils.buildUpdateRequest(userGroup)).toEqual(url);
    })
})