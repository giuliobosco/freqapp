import React from 'react';
import { Alert } from 'react-native';

import LoginView from '../components/LoginView';

const LoginComponent = () => {

    const viewProps = {
        usernameChanged: (username: string) => {
            console.log(username)
        },
        passwordChanged: (password: string) => {
            console.log(password)
        },
        buttonClicked: () => {
            console.log('click')
            Alert.alert('clicked')
        }
    }

    return (<LoginView {...viewProps} />);
}

export default LoginComponent;