import { freqlineStartPush } from '../../reducers/freqlineSlice';
import {
    statusService,
    frequenceService,
    micService,
    decibelService,
} from '../../services/FreqlineService';

const freqlinePushMiddleware = ({getState}:any) => (next:any) => (action:any) => {
    if (action.type === freqlineStartPush.toString()) {
        const { status, frequence, micTimer, decibel } = getState().freqline;
        
        statusService.set(status).then(() => {});
        frequenceService.set(frequence).then(() => {});
        micService.set(micTimer).then(() => {});
        decibelService.set(decibel).then(() => {});
    }

    return next(action);
}

export default freqlinePushMiddleware;