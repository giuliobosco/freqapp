import NetInfo from '@react-native-community/netinfo';

import {
    netInfoStartCheck,
    netInfoSuccessCheck
} from '../reducers/netInfoSlice';

export default function netInfoMiddleware({ dispatch }: any) {
    return function (next: any) {
        return function (action: any) {
            if (action.type === netInfoStartCheck.toString()) {
                NetInfo.fetch().then(state => {
                    dispatch(netInfoSuccessCheck(state));
                })
            }
            return next(action);
        }
    }
}