import React, { Component } from 'react';
import { Alert } from 'react-native';

import FreqlineComponent from './FreqlineComponent';

import LoadingView from '../views/LoadingView';
import NoInternetConnectionView from '../views/NoInternetConnectionView';
import loginService from '../services/LoginService';
import LoginView from '../components/LoginView';

const LoginComponent = () => {

    const viewProps = {
        usernameChanged: (username:string) => {
            console.log(username)
        },
        passwordChanged: (password:string) => {
            Alert.alert(password);
        },
        buttonClicked: () => {
            console.log('click')
            Alert.alert('clicked')
        }
    }

    return (<LoginView {...viewProps} />);
}

export default LoginComponent;