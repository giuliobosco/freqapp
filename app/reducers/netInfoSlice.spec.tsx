import netInfo, { netInfoStartCheck, netInfoSuccessCheck } from './netInfoSlice';

describe('Reducer::netInfo', () => {
    // testing initial reducer state
    it('should handle initial state', () => {
        expect(netInfo(undefined, {})).toEqual({ isLoading: false, isConnected: false })
    })

    // testing netInfoStartCheck action 
    it('should handle netInfoStartCheck', () => {
        expect(
            netInfo(undefined, {
                type: netInfoStartCheck
            })
        ).toEqual({ isLoading: true, isConnected: false });
    })

    // testing netInfoSuccessCheck action
    it('should handle netInfoSuccessCheck', () => {
        // testing netInfoSuccessCheck action with network connected
        expect(
            netInfo(undefined, {
                type: netInfoSuccessCheck,
                payload: {
                    isConnected: false,
                }
            })
        ).toEqual({ isLoading: false, isConnected: false })

        // testing netInfoSuccessCheck action with out network connected
        expect(
            netInfo(undefined, {
                type: netInfoSuccessCheck,
                payload: {
                    isConnected: true,
                }
            })
        ).toEqual({ isLoading: false, isConnected: true })
    })
})