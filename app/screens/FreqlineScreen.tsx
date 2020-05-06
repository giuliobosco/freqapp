import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function () {
    return (
        <View style={styles.container}>
            <Text>Freqline</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});