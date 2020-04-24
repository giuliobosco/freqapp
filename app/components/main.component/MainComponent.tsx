import React, { Component } from 'react';
import NetInfo from '@react-native-community/netinfo';

import FreqlineComponent from '../freqline.component/FreqlineComponent';

import LoadingView from '../../views/LoadingView';
import NoInternetConnectionView from '../../views/NoInternetConnectionView';

export default class MainComponent extends Component {

    state = {
        isLoading: true,
        isConnected: null,
    }

    render() {
        const { isLoading, isConnected } = this.state;
        if (isLoading) {
            return (
                <LoadingView/>
            );
        } 
        
        if (isConnected == null) {
            return (
                <NoInternetConnectionView />
            );
        }

        return (
            <FreqlineComponent/>
        );
    }

    componentDidMount() {
         NetInfo.fetch().then(state => {
             this.setState({isConnected: state.isConnected, isLoading: false});
         });
    }

}