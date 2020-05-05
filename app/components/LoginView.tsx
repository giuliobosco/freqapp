import React, { useRef } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types'

import LoginButton from './LoginButton';
import { Colors } from '../config/config';
import { Strings } from '../config/string';
import FormTextInput from './FormTextInput';

const LoginView = ({ usernameChanged, passwordChanged, buttonClicked, error }: any) => {
    const year = new Date().getFullYear().toString();
    const passwordInputRef = useRef();

    const usernameSubmitPress = () => {
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{Strings.FREQLINE}</Text>
                <Text>{Strings.FREQLINE_DESCRIPTION}</Text>
            </View>
            <View style={styles.formContainer}>
                <FormTextInput
                    onChangeText={(username: string) => usernameChanged(username)}
                    placeholder={Strings.USERNAME_PLACEHOLDER}
                    keyboardType="url"
                    autoCorrect={false}
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    onSubmitEditing={usernameSubmitPress} />
                <FormTextInput
                    ref={passwordInputRef}
                    onChangeText={(password: string) => passwordChanged(password)}
                    placeholder={Strings.PASSWORD_PLACEHOLDER}
                    secureTextEntry={true}
                    returnKeyType='done'
                    onSubmitEditing={buttonClicked} />
                {error != null ? <Text style={styles.error}>{error}</Text> : null}
                <LoginButton onPress={buttonClicked} text={Strings.LOGIN} />
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
        marginBottom: 20,
    },
});