import React, { Component } from 'react';
import { Text, Alert } from 'react-native';

import LoadingView from '../../views/LoadingView';
import NotFreqlineError from '../../views/NotFreqlineError';

import freqlineService from '../../services/FreqlineService';
import CenteredTextView from '../../views/CenteredTextView';


export default class FreqlineComponent extends Component {

    state = {
        isLoading: true,
        error: false,
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

        const { error } = this.state;

        if (error) {
            return (
                <NotFreqlineError/>
            );
        }

        const {freqline} = this.state;

        if (!freqline) {
            return (
                <NotFreqlineError/>
            );
        }

        const {serial} = this.state;

        if (!serial) {
            return (
                <CenteredTextView text={'Freqline Internal Error\nSerial Communication Error'}/>
            );
        }

        const { db } = this.state;

        if (!db) {
            return (
                <CenteredTextView text={'Freqline Internal Error\nDatabase connection error'}/>
            );
        }

        return (
            <CenteredTextView text={'Freqline'}/>
        );
    }

    componentDidMount() {
        freqlineService()
        .then(response => response.json())
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
        .catch(error => {
            this.setState({error: true, isLoading: false})
        })
    }

}