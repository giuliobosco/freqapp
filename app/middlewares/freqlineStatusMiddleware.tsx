import { 
    freqlineStatusStartCheck,
    freqlineStatusSuccessCheck,
    freqlineStatusErrorCheck,
} from '../components/freqline.component/freqlineStatusSlice'
import freqlineService from '../services/FreqlineService';

export default function freqlineStatusMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            switch(action.type) {
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