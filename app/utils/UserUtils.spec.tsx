import UserUtils from "./UserUtils"
import Config from "../config/config"
import User from "../models/User";

describe('Utils::UserUtils', () => {
    const userApi = Config.getApiBase('data/user');

    it('should return the get api url with parameters', () => {
        expect(UserUtils.buildGetRequest()).toEqual(userApi)
    })

    it('should return the getById api url with parameters', () => {
        const rnd:number = Math.random();
        const url = userApi + '/' + rnd;

        expect(UserUtils.buildGetByIdRequest(rnd)).toEqual(url);
    })

    it ('should return the delete api url with parameters', () => {
        const rnd:number = Math.random();
        const url = userApi + '/' + rnd;

        expect(UserUtils.buildDeleteRequest(rnd)).toEqual(url);
    })

    it('should return the insert api url with parameters', () => {
        const rnd = Math.random();

        const user:User = {
            id: 0,
            username: 'a' + rnd,
            password: 'b'+rnd,
            email: 'c'+rnd,
            firstname: 'd'+rnd,
            lastname: 'e'+rnd,
        }

        const url = userApi + '?username='+user.username+'&password='+user.password+'&salt=salt&firstname='+user.firstname+'&lastname='+user.lastname+'&email='+user.email+'&favoriteGenerator=1';

        expect(UserUtils.buildInsertRequest(user)).toEqual(url);
    })

    it('should return the delete api url with parameters', () => {
        const rnd = Math.random();

        const user:User = {
            id: rnd,
            username: 'a' + rnd,
            password: 'b'+rnd,
            email: 'c'+rnd,
            firstname: 'd'+rnd,
            lastname: 'e'+rnd,
        }

        const url = userApi + '?id='+user.id+'&username='+user.username+'&password='+user.password+'&salt=salt&firstname='+user.username+'&lastname'+user.lastname+'&email='+user.email+'&favoriteGenerator=1';

        expect(UserUtils.buildUpdateRequest(user)).toEqual(url);
    })
})