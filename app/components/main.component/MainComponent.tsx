import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import useFetching from "../../utils/useFetching"
import LoadingView from "../../views/LoadingView";
import NoInternetConnectionView from "../../views/NoInternetConnectionView";
import FreqlineComponent from "../freqline.component/FreqlineComponent";
import { netInfoStartCheck } from './netInfoSlice';


const MainComponent = ({ netInfo, netInfoStartCheck }) => {
    useFetching(netInfoStartCheck);

    const { isLoading, isConnected } = netInfo;

    if (isLoading) {
        return (<LoadingView />);
    }

    if (!isConnected) {
        return (<NoInternetConnectionView />);
    }

    return (<FreqlineComponent />);
}

MainComponent.prototype = {
    netInfo: PropTypes.object.isRequired,
    netInfoStartCheck: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    netInfo: state.netInfo,
})

const mapDispatchToProps = { netInfoStartCheck }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);