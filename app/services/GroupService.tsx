import Config from "../config/config"

const groupApi = Config.getApiBase('data/group');

const GroupService = {
    get: () => {
        return fetch(groupApi, Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    },
    getById: (id:number) => {
        const url = groupApi + '/' + id;

        return fetch(url, Config.getHeaders('GET')).then(response => {
            return response.json();
        }).then(json => json);
    }
}

export default GroupService;