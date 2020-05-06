import Config from '../config/config';

export default function freqlineService() {
    return fetch(Config.getApiBase('action/freqline'), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    }).then(json => json);
}

const GET_HEADER = Config.getHeaders('GET');
const POST_HEADER = Config.getHeaders('POST');

const statusUrl = 'action/generatorStatus';

const statusService = {
    get: () => {
        return fetch(Config.getApiBase(statusUrl), GET_HEADER).then(response => {
            return response.json();
        }).then(json => json); 
    },
    set: (status:boolean) => {
        const url = Config.getApiBase(statusUrl) + '?status=' + (status?'1':'0');

        return fetch(url, POST_HEADER)
            .then(response => response.json())
            .then(json => json);
    }
}

export { statusService };