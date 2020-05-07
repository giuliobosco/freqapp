import {
    freqlineStatusStartCheck,
    freqlineStatusSuccessCheck,
    freqlineStatusErrorCheck,
} from '../../reducers/freqlineStatusSlice'
import freqlineService from '../../services/FreqlineService';

export default function freqlineStatusMiddleware({ dispatch }: any) {
    return function (next: any) {
        return function (action: any) {
            switch (action.type) {
                case freqlineStatusStartCheck.toString():
                    freqlineService().then(json => {
                        dispatch(freqlineStatusSuccessCheck(json));
                    }).catch(error => {
                        if (typeof error != 'string') {
                            error = "Network Error"
                        }
                        dispatch(freqlineStatusErrorCheck(error));
                    })
            }
            return next(action)
        }
    }
}