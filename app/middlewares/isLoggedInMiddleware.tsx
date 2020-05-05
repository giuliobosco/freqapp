import {
    loginStartCheck,
    loginSuccessCheck,
    loginErrorCheck,
} from '../reducers/loginSlice';
import { isLoggedInService } from '../services/AuthenticationService';

const isLoggedInMiddleware = ({ dispatch }: any) => (next: any) => (action: any) => {
    if (action.type === loginStartCheck.toString()) {
        isLoggedInService().then(json => {
            if (json.status == 200) {
                dispatch(loginSuccessCheck());
            } else {
                dispatch(loginErrorCheck(''))
            }
        }).catch(error => {
            if (typeof error != 'string') {
                error = "Network error"
            }
            dispatch(loginErrorCheck(error));
        })
    }

    return next(action);
}

export default isLoggedInMiddleware;