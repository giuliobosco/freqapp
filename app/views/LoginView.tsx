import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import PropTypes from 'prop-types'

import LoginButton from '../components/LoginButton';

const LoginView = ({usernameChanged, passwordChanged, buttonClicked, error}:any) => {
    const year = new Date().getFullYear().toString();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Freqline</Text>
            <Text style={styles.subtitle}>Gestore di generatore di frequenze</Text>
        
            <Text style={styles.inputName}>Username</Text>
            <TextInput onChangeText={username => usernameChanged(username)} style={styles.input}/>
            <Text style={styles.inputName}>Password</Text>
            <TextInput onChangeText={password => passwordChanged(password)} style={styles.input}/>
            <Text style={styles.error}>{error}</Text>
            <LoginButton onPress={buttonClicked} text={'login'}/>
            <Text style={styles.copy}>&copy;{year} Giulio Bosco</Text>
        </View>
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
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 40
    },
    subtitle: {
        paddingTop: 15,
        fontSize: 20
    },
    inputName: {
        paddingTop: 30,
    },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderBottomWidth: 1 
    },
    error: {

    },
    copy: {

    },
});