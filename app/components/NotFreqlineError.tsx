import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Freqline Error!</Text>
            <View style={styles.text}>
                <Text>Freqline server not found.</Text>
                <Text>Check if you are connected to freqline network.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20
    },
    text: {
        marginTop: 20,
        textAlign: 'left',
    },
});