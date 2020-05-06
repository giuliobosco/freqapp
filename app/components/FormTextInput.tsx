import React, { forwardRef } from 'react';
import { StyleSheet,  TextInput, TextInputProps, View, Text } from 'react-native';

import { Colors } from '../config/config';

type Props = TextInputProps & {
    error?: string;
}

const FormTextInput = forwardRef((props, ref) => {
    const { error, style, ...otherProps } = props;

    return (
        <View style={[styles.container, style]}>
            <TextInput
                ref={ref}
                selectionColor={Colors.LIGHT_GRAY}
                style={[styles.textInput, style]}
                {...otherProps}/>
            {error.length>0?<Text style={styles.errorText}>{error || ""}</Text>:null}
        </View>
    );
})

export default FormTextInput;

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    textInput: {
        height: 40,
        borderColor: Colors.GRAY,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    },
    errorText: {
        height: 20,
        color: Colors.RED,
    },
})