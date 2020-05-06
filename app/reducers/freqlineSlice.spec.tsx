import _ from 'lodash';

import freqline, {
    statusFetched,
    frequenceFetched,
    micTimerFetched,
    decibelFetched,
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
} from './freqlineSlice';

const initState = {
    status: false,
    frequence: 0,
    micTimer: 0,
    decibel: 0,
}

describe('Reducer::freqline', () => {
    it('should handle reduer state', () => {
        expect(freqline(undefined, { type: null })).toEqual(initState);
    })

    // statusFetched
    it('should handle statusFetched true', () => {
        const status = true;
        const state = _.clone(initState);
        state.status = status;

        expect(freqline(undefined, {
            type: statusFetched,
            payload: status,
        })).toEqual(state);
    })

    it('should handle statusFetched false', () => {
        const status = false;
        const state = _.clone(initState);
        state.status = status;

        expect(freqline(undefined, {
            type: statusFetched,
            payload: status,
        })).toEqual(state);
    })

    it('should handle statusFetched update status', () => {
        const previusStatus = true;

        const previusState = _.clone(initState);
        previusState.status = previusStatus;

        const status = !previusStatus;
        const state = _.clone(initState);
        state.status = status;

        expect(freqline(previusState, {
            type: statusFetched,
            payload: status,
        })).toEqual(state);
    })

    // frequenceFetched
    it('should handle frequenceFetched 0', () => {
        const frequence = 0
        const state = _.clone(initState);
        state.frequence = frequence,
    
        expect(freqline(undefined, {
            type: frequenceFetched,
            payload: frequence,
        })).toEqual(state);
    })

    it('should handle frequenceFetched 10', () => {
        const frequence = 10
        const state = _.clone(initState);
        state.frequence = frequence,
    
        expect(freqline(undefined, {
            type: frequenceFetched,
            payload: frequence,
        })).toEqual(state);
    })

    it('should handle statusFetched update frequence', () => {
        const previusFrequence = 100;

        const previusState = _.clone(initState);
        previusState.frequence = previusFrequence;

        const frequence = 1000;
        const state = _.clone(initState);
        state.frequence = frequence;

        expect(freqline(previusState, {
            type: frequenceFetched,
            payload: frequence
        })).toEqual(state);
    })

    // micTimerFetched
    it('should handle micTimerFetched 0', () => {
        const micTimer = 0
        const state = _.clone(initState);
        state.micTimer = micTimer,
    
        expect(freqline(undefined, {
            type: micTimerFetched,
            payload: micTimer,
        })).toEqual(state);
    })

    it('should handle micTimerFetched 10', () => {
        const micTimer = 10
        const state = _.clone(initState);
        state.micTimer = micTimer,
    
        expect(freqline(undefined, {
            type: micTimerFetched,
            payload: micTimer,
        })).toEqual(state);
    })

    it('should handle statusFetched update micTimer', () => {
        const previusMicTimer = 10;

        const previusState = _.clone(initState);
        previusState.micTimer = previusMicTimer;

        const micTimer = 60;
        const state = _.clone(initState);
        state.micTimer = micTimer;

        expect(freqline(previusState, {
            type: micTimerFetched,
            payload: micTimer
        })).toEqual(state);
    })

    // decibelFetched
    it('should handle decibelFetched 0', () => {
        const decibel = 0
        const state = _.clone(initState);
        state.decibel = decibel,
    
        expect(freqline(undefined, {
            type: decibelFetched,
            payload: decibel,
        })).toEqual(state);
    })

    it('should handle decibelFetched 10', () => {
        const decibel = 10
        const state = _.clone(initState);
        state.decibel = decibel,
    
        expect(freqline(undefined, {
            type: decibelFetched,
            payload: decibel,
        })).toEqual(state);
    })

    it('should handle statusFetched update decibel', () => {
        const previusDecibel = 50;

        const previusState = _.clone(initState);
        previusState.decibel = previusDecibel;

        const decibel = 60;
        const state = _.clone(initState);
        state.decibel = decibel;

        expect(freqline(previusState, {
            type: decibelFetched,
            payload: decibel
        })).toEqual(state);
    })
})