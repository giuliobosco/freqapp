import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import LoadingView from '../../views/LoadingView';
import NotFreqlineError from '../../views/NotFreqlineError';
import CenteredTextView from '../../views/CenteredTextView';
import { freqlineStatusStartCheck } from './freqlineStatusSlice';

import useFetching from '../../utils/useFetching';

const FreqlineComponent = ({ freqlineStatus, freqlineStatusStartCheck }) => {

    useFetching(freqlineStatusStartCheck)

    const { isLoading, error, freqlineOk, serialOk, dbOk } = freqlineStatus;

    if (isLoading) {
        return (<LoadingView />);
    }

    if (error) {
        return (<NotFreqlineError />)
    }

    if (!freqlineOk) {
        return (<NotFreqlineError />)
    }

    if (!serialOk) {
        return (<CenteredTextView text={'Freqline Internal Error\nSerial Communication Error'} />)
    }

    if (!dbOk) {
        return (<CenteredTextView text={'Freqline Internal Error\nDatabase connection error'} />)
    }

    return (
        <CenteredTextView text={'Freqline'} />
    );
}

FreqlineComponent.prototype = {
    freqlineStatus: PropTypes.object.isRequired,
    freqlineStatusStartCheck: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    freqlineStatus: state.freqlineStatus
})

const mapDispatchToProps = { freqlineStatusStartCheck };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FreqlineComponent);
