import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UsersStacks } from '../navigation/Navigation';

export default function ({ navigation }:any) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Users</Text>
            <Button title="Go to user" onPress={() => navigation.navigate(UsersStacks.USER)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});