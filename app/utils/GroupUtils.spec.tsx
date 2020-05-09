import Config from "../config/config"
import GroupUtils from "./GroupUtils";
import Group from "../models/Group";

describe('Utils::GroupUtils', () => {
    const groupApi = Config.getApiBase('data/group');

    it('should return the get api url with parameters', () => {
        expect(GroupUtils.buildGetRequest()).toEqual(groupApi);
    })

    it('should return the getById api url with parameters', () => {
        const rnd: number = Math.random();
        const url = groupApi + '/' + rnd;

        expect(GroupUtils.buildGetByIdRequest(rnd)).toEqual(url);
    })

    it('should return the delete api url with parameters', () => {
        const rnd: number = Math.random();
        const url = groupApi + '/' + rnd;

        expect(GroupUtils.buildDeleteRequest(rnd)).toEqual(url);
    })

    it('should return the insert api url with parameters', () => {
        const rnd: number = Math.random();

        const group: Group = {
            id: 0,
            name: 'a' + rnd,
        }

        const url = groupApi + '?name=' + group.name + '&parentGroup=' + group.parentGroup;

        expect(GroupUtils.buildInsertRequest(group)).toEqual(url);
    })

    it('should return the update api url with parameters', () => {
        const rnd:number = Math.random();

        const group: Group = {
            id: rnd,
            name: 'a' + rnd,
        }

        const url = groupApi + '?id=' + group.id + '&name=' + group.name + '&parentGroup=' + group.parentGroup;

        expect(GroupUtils.buildUpdateRequest(group)).toEqual(url);
    })
})