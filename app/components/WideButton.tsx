import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

import { Colors } from '../config/config';


const WideButton = ({ text, onPress, disabled }: any) => {
    const containerStyle = [
        styles.container,
        disabled
            ? styles.containerDisabled
            : styles.containerEnable,
    ]
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

WideButton.prototype = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

export default WideButton;

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
    containerEnable: {
        opacity: 1,
    },
    containerDisabled: {
        opacity: 0.3,
    },
    text: {
        color: Colors.WHITE,
        textAlign: 'center',
        height: 20,
        fontSize: 18,
    }
})