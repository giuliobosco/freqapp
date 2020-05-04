import NetInfo from '@react-native-community/netinfo';

import {
    netInfoStartCheck,
    netInfoSuccessCheck
} from '../components/main.component/netInfoSlice'

export default function netInfoMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === netInfoStartCheck.toString()) {
                NetInfo.fetch().then(state => {
                    dispatch(netInfoSuccessCheck(state));
                })
            }
            return next(action);
        }
    }
}