import {
    loginButtonClicked,
    loginSuccessCheck,
    loginErrorCheck,
} from '../../reducers/authSlice';
import { loginService } from '../../services/AuthenticationService';

const loginMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    if (action.type == loginButtonClicked.toString()) {
        const { username, password } = getState().auth;
        loginService(username, password).then(json => {
            if (json.status == 200) {
                dispatch(loginSuccessCheck());
            } else {
                dispatch(loginErrorCheck(json.message))
            }
        }).catch(error => {
            if (typeof error != 'string') {
                error = "Network error"
            }
            dispatch(loginErrorCheck(error));
        })
    }

    return next(action)
}

export default loginMiddleware;
