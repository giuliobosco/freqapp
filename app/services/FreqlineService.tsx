import Config from '../config';
import { Alert } from 'react-native';

export default function freqlineService() {
    return fetch(Config.getApiBase() + 'action/freqline', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .catch(error => Alert.alert("Internal Error", error))
}