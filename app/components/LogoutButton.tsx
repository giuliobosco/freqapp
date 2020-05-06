import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { logout } from '../reducers/loginSlice';
import WideButton from './WideButton';
import { Strings } from '../config/string';

const LogoutButton = ({logout}:any) => {

    const  logoutButtonPressed = () => {
        logout();
    }

    return (
        <WideButton text={Strings.LOGOUT} onPress={logoutButtonPressed} />
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
