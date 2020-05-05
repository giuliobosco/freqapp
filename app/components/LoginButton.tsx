import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

import { Colors } from '../config/config';


const LoginButton = ({ text, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

LoginButton.prototype = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default LoginButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.WHITE07,
    },
    text: {
        color: Colors.WHITE,
        textAlign: 'center',
        height: 20,
        fontSize: 18,
    }
})