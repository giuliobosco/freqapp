import Config from '../config';

export default function freqlineService() {
    return fetch(Config.getApiBase() + 'action/freqline', {
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