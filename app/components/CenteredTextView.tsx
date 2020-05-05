import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function(props: { text: React.ReactNode; }) {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
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