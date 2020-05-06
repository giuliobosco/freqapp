import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoutButton from './LogoutButton';

export default function () {
    return (
        <View style={styles.container}>
            <Text>Unauthorized</Text>
            <LogoutButton />
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