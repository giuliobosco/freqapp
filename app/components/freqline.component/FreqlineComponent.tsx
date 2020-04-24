import React, { Component } from 'react';
import { Text } from 'react-native';

import LoadingView from '../../views/LoadingView';
import NotFreqlineError from '../../views/NotFreqlineError';

import freqlineService from '../../services/FreqlineService';
import CenteredTextView from '../../views/CenteredTextView';


export default class FreqlineComponent extends Component {

    state = {
        isLoading: true,
        freqline: false,
        serial: false,
        db: false,
    }

    render() {
        const {isLoading } = this.state;
        if (isLoading) {
            return (
                <LoadingView/>
            );
        }

        const {freqline} = this.state;

        if (!freqline) {
            return (
                <NotFreqlineError/>
            );
        }

        const {serial, db} = this.state;

        if (!serial) {
            return (
                <CenteredTextView text={'Freqline Internal Error\nSerial Communication Error'}/>
            );
        }

        if (!db) {
            return (
                <CenteredTextView text={'Freqline Internal Error\nDatabase connection error'}/>
            );
        }

        return (
            <Text>FreqlineComponent</Text>
        );
    }

    componentDidMount() {
         freqlineService()
         .then(response => {
             if (response.freqline != null) {
                 this.setState({freqline: response.freqline});
             }
             if (response.serial != null) {
                 this.setState({serial: response.serial});
             }
             if (response.db != null) {
                 this.setState({db: response.db});
             }

             this.setState({isLoading: false});
         })
    }

}