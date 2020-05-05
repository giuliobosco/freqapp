import {
    loginButtonClicked,
    loginSuccessCheck,
    loginErrorCheck,
} from '../reducers/loginSlice';
import { loginService } from '../services/AuthenticationService';

const loginMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    if (action.type == loginButtonClicked.toString()) {
        const { username, password } = getState();
        loginService(username, password).then(() => {
            dispatch(loginSuccessCheck());
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
