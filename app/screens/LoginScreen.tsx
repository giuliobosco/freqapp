import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import _ from 'lodash';

import LoginView from '../components/LoginView';
import {
    loginStartCheck,
    loginButtonClicked,
    loginUsernameChanged,
    loginPasswordChanged,
} from '../reducers/loginSlice';
import useFetching from '../utils/useFetching';
import LoadingView from '../components/LoadingView';
import CenteredTextView from '../components/CenteredTextView';

const LoginComponent = ({ login, loginStartCheck, loginButtonClicked, loginUsernameChanged, loginPasswordChanged }: any) => {

    useFetching(loginStartCheck);

    const { isLoading, isLoggedIn, error } = login;

    if (isLoading) {
        return (<LoadingView />);
    }

    if (!isLoggedIn) {
        const viewProps = {
            usernameChanged: (username: string) => {
                loginUsernameChanged(username)
            },
            passwordChanged: (password: string) => {
                loginPasswordChanged(password)
            },
            buttonClicked: () => {
                loginButtonClicked()
            }
        }

        return (<LoginView {...viewProps} error={error} />);
    }

    return (<CenteredTextView text={'Freq helo'} />);
}

LoginComponent.prototype = {
    login: PropTypes.object.isRequired,
    loginStartCheck: PropTypes.func.isRequired,
    loginButtonClicked: PropTypes.func.isRequired,
    loginUsernameChanged: PropTypes.func.isRequired,
    loginPasswordChanged: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    login: state.login,
})

const mapDispatchToProps = {
    loginStartCheck,
    loginButtonClicked,
    loginUsernameChanged,
    loginPasswordChanged,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);