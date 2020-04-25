import Config from '../config';

export default function freqlineService() {
    return fetch(Config.getApiBase() + 'action/freqline', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}