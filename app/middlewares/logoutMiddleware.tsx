import { logout } from '../reducers/authSlice';
import { logoutService } from '../services/AuthenticationService';

const logoutMiddleware = () => (next:any) => (action:any) => {
    if (action.type === logout.toString()) {
        logoutService().then(() => {})
    }

    return next(action);
}

export default logoutMiddleware;