import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types'

import WideButton from './WideButton';
import { Colors } from '../config/config';
import { Strings } from '../config/string';
import FormTextInput from './FormTextInput';

const LoginView = ({ usernameChanged, passwordChanged, buttonClicked, error }: any) => {
    const [ username, setUsername ] = useState('')
    const [ usernameTouched, setUsernameTouched ] = useState(false);
    const [ password, setPassword ] = useState('');
    const [ passwordTouched, setPasswordTouched ] = useState(false);

    const year = new Date().getFullYear().toString();
    const passwordInputRef = useRef();

    const handleUsernameChanged = (username:string) => {
        usernameChanged(username);
        setUsername(username);
    }

    const handlePasswordChanged = (password:string) => {
        passwordChanged(password)
        setPassword(password)
    }

    const handleUsernameBlur = () => {
        setUsernameTouched(true)
    }

    const handlePasswordBlur = () => {
        setPasswordTouched(true)
    }

    const usernameSubmitPress = () => {
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }

    const usernameError = 
        ! username && usernameTouched
            ? Strings.USERNAME_REQUIRED
            : '';

    const passwordError = 
        ! password && passwordTouched
            ? Strings.PASSWORD_REQUIRED
            : '';

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{Strings.FREQLINE}</Text>
                <Text>{Strings.FREQLINE_DESCRIPTION}</Text>
            </View>
            <View style={styles.formContainer}>
                <FormTextInput
                    onChangeText={(username: string) => handleUsernameChanged(username)}
                    placeholder={Strings.USERNAME_PLACEHOLDER}
                    keyboardType="url"
                    autoCorrect={false}
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    onSubmitEditing={usernameSubmitPress} 
                    onBlur={handleUsernameBlur}
                    error={usernameError}/>
                <FormTextInput
                    ref={passwordInputRef}
                    onChangeText={(password: string) => handlePasswordChanged(password)}
                    placeholder={Strings.PASSWORD_PLACEHOLDER}
                    secureTextEntry={true}
                    returnKeyType='done'
                    onSubmitEditing={buttonClicked} 
                    onBlur={handlePasswordBlur}
                    error={passwordError}/>
                {error != null ? <Text style={styles.error}>{error}</Text> : null}
                <WideButton onPress={buttonClicked} text={Strings.LOGIN} disabled={!username || !password}/>
                <Text>&copy;{year} Giulio Bosco</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

LoginView.prototype = {
    usernameChanged: PropTypes.func.isRequired,
    passwordChanged: PropTypes.func.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default LoginView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        flex: 1,
        width: "80%",
        resizeMode: 'contain',
        alignSelf: 'center',
        paddingTop: "20%",
    },
    title: {
        fontSize: 40,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
    inputName: {
        paddingTop: 30,
    },
    error: {
        color: Colors.RED,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
    },
});