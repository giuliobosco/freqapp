import _ from 'lodash';

import freqlineStatus, { freqlineStatusStartCheck, freqlineStatusSuccessCheck, freqlineStatusErrorCheck } from './freqlineStatusSlice';

const initState = {
    freqlineOk: false,
    serialOk: false,
    dbOk: false,
    isLoading: false,
    error: '',
};

describe('Reducer::freqlineStatus', () => {
    it('should handle reducer state', () => {
        expect(freqlineStatus(undefined, {})).toEqual(initState);
    })

    it('should handle freqlineStatusStartCheck', () => {
        const state = _.clone(initState);
        state.isLoading = true;

        expect(freqlineStatus(undefined, {
            type: freqlineStatusStartCheck
        })).toEqual(state)
    })

    it('should handle freqlineStatusSuccessCheck', () => {
        let state;

        // test without payload data
        state = _.clone(initState);
        state.error = 'no data';

        expect(freqlineStatus(undefined, {
            type: freqlineStatusSuccessCheck
        })).toEqual(state)

        // test with freqline false attribute
        state = _.clone(initState);
        state.freqlineOk = false;
        expect(freqlineStatus(undefined, {
            type: freqlineStatusSuccessCheck,
            payload: {
                freqline: false,
            },
        })).toEqual(state)

        // test with serial false attribute
        state = _.clone(initState);
        state.freqlineOk = true;
        state.serialOk = false;
        expect(freqlineStatus(undefined, {
            type: freqlineStatusSuccessCheck,
            payload: {
                freqline: true,
                serial: false,
            },
        })).toEqual(state);

        // test with database false attribute
        state = _.clone(initState);
        state.freqlineOk = true;
        state.serialOk = true;
        state.dbOk = true;
        expect(freqlineStatus(undefined, {
            type: freqlineStatusSuccessCheck,
            payload: {
                freqline: true,
                serial: true,
                db: true,
            },
        })).toEqual(state);
    })

    it('should handle freqlineStatusErrorCheck', () => {
        const error = "General Error" + Math.random();
        const state = _.clone(initState);
        state.error = error
        expect(freqlineStatus(undefined, {
            type: freqlineStatusErrorCheck,
            payload: error
        })).toEqual(state);
    })
})
