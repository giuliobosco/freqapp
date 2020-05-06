import { logout, loginButtonClicked } from '../reducers/loginSlice';
import { logoutService } from '../services/AuthenticationService';

const logoutMiddleware = () => (next:any) => (action:any) => {
    if (action.type === loginButtonClicked.toString()) {
        logoutService().then(() => {})
    }

    return next(action);
}

export default logoutMiddleware;