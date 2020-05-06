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

const frequenceUrl = 'action/generatorFrequence';

const frequenceService = {
    get: () => {
        return fetch(Config.getApiBase(frequenceUrl), GET_HEADER).then(response => {
            return response.json();
        }).then(json => json); 
    },
    set: (frequence:number) => {
        const url = Config.getApiBase(frequenceUrl) + '?frequence=' + frequence;

        return fetch(url, POST_HEADER)
            .then(response => response.json())
            .then(json => json);
    }
}

const micUrl = 'action/generatorMicTimer';

const micService = {
    get: () => {
        return fetch(Config.getApiBase(micUrl), GET_HEADER).then(response => {
            return response.json();
        }).then(json => json); 
    },
    set: (timer:number) => {
        const url = Config.getApiBase(micUrl) + '?timer=' + timer;

        return fetch(url, POST_HEADER)
            .then(response => response.json())
            .then(json => json);
    }
}

const decibelUrl = 'action/generatorDecibel';

const decibelService = {
    get: () => {
        return fetch(Config.getApiBase(decibelUrl), GET_HEADER).then(response => {
            return response.json();
        }).then(json => json); 
    },
    set: (decibel:number) => {
        const url = Config.getApiBase(decibelUrl) + '?decibel=' + decibel;

        return fetch(url, POST_HEADER)
            .then(response => response.json())
            .then(json => json);
    }
}

export { statusService, frequenceService, micService, decibelService };