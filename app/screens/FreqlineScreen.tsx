import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import FreqlineView from '../components/FreqlineView';
import {
    freqlineStartFetch,
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
} from '../reducers/freqlineSlice';
import useFetching from '../utils/useFetching';

const FreqlineScreen = ({
    freqline, 
    freqlineStartFetch, 
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
}:any) => {
    useFetching(freqlineStartFetch);

    const viewProps = {
        freqline,
        updateStatus,
        updateFrequence,
        updateMicTimer,
        updateDecibel,
    };

    return ( <FreqlineView {...viewProps}/> )
}

FreqlineScreen.prototype = {
    freqline: PropTypes.object.isRequired, 
    freqlineStartFetch: PropTypes.func.isRequired, 
    updateStatus: PropTypes.func.isRequired,
    updateFrequence: PropTypes.func.isRequired,
    updateMicTimer: PropTypes.func.isRequired,
    updateDecibel: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    freqline: state.freqline
})

const mapDispatchToProps = {
    freqlineStartFetch,
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FreqlineScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});