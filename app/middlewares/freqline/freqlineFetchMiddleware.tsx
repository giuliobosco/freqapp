import {
    freqlineStartFetch,
    statusFetched,
    frequenceFetched,
    micTimerFetched,
    decibelFetched,
} from '../../reducers/freqlineSlice';
import {
    statusService,
    frequenceService,
    micService,
    decibelService,
} from '../../services/FreqlineService';

const freqlineFetchMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {
    if (action.type === freqlineStartFetch.toString()) {
        statusService.get().then(json => {
            dispatch(statusFetched(json.status))
        });

        frequenceService.get().then(json => { 
            dispatch(frequenceFetched(json.frequence))
        });

        micService.get().then(json => {
            dispatch(micTimerFetched(json.micTimer))
        })

        decibelService.get().then(json => {
            dispatch(decibelFetched(json.decibel));
        })
    }

    return next(action);
}

export default freqlineFetchMiddleware;