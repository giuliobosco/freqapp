import React, { useRef, forwardRef } from 'react';
import { StyleSheet,  TextInput, TextInputProps } from 'react-native';

import { Colors } from '../config/config';

type Props = TextInputProps;

const FormTextInput = forwardRef((props, ref) => {
    const { style, ...otherProps } = props;

    return (
        <TextInput
            ref={ref}
            selectionColor={Colors.LIGHT_GRAY}
            style={[styles.textInput, style]}
            {...otherProps}/>
    );
})

export default FormTextInput;

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: Colors.GRAY,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
    },
})