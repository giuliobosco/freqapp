import {
    permissionsStartCheck,
    permissionsSuccessCheck,
    permissionsErrorCheck,
} from '../reducers/loginSlice';
import { getPermissionsService } from '../services/AuthenticationService';

const permissionsMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {
    if (action.type == permissionsStartCheck.toString()) {
        getPermissionsService().then(json => {
            if (json.status == 200) {
                dispatch(permissionsSuccessCheck(json.permissions))
            } else {
                dispatch(permissionsErrorCheck(json.statusString))
            }
        }).catch(error => {
            if (typeof error != 'string') {
                error = "Network error"
            }
            dispatch(permissionsErrorCheck(error))
        })
    }

    return next(action);
}

export default permissionsMiddleware;