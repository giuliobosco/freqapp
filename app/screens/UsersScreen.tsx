import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ({ navigation }:any) {
    return (
        <View style={styles.container}>
            <Text>Users</Text>
            <Button title="Go to user" onPress={() => navigation.navigate('User')} />
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