import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoutButton from './LogoutButton';

const SettingsView = ({logout}:any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings</Text>
            <View style={styles.logoutContainer}>
                <LogoutButton />
            </View>
        </SafeAreaView>
    )
}

export default SettingsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40
    },
    logoutContainer: {
        marginTop: 50,
        justifyContent: 'center',
        width: '80%',
    },
    
});