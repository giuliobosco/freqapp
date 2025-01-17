import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import LoginComponent from './LoginScreen';
import LoadingView from '../components/LoadingView';
import NotFreqlineError from '../components/NotFreqlineError';
import CenteredTextView from '../components/CenteredTextView';
import { freqlineStatusStartCheck } from '../reducers/freqlineStatusSlice';

import useFetching from '../utils/useFetching';

const FreqlineComponent = ({ freqlineStatus, freqlineStatusStartCheck }:any) => {

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
        <LoginComponent />
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
