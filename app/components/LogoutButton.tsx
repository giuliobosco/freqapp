import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { logout } from '../reducers/loginSlice';
import LoginButton from './LoginButton';
import { Strings } from '../config/string';

const LogoutButton = ({logout}:any) => {

    const  logoutButtonPressed = () => {
        logout();
    }

    return (
        <LoginButton text={Strings.LOGOUT} onPress={logoutButtonPressed} />
    )
}

LogoutButton.prototype = {
    logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    logout,
}

export default connect(
    null,
    mapDispatchToProps,
)(LogoutButton);
