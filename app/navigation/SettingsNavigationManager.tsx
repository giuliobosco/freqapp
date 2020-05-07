import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen';
import { Strings } from '../config/string';
import { SettingsStacks } from './Navigation'

const Stack = createStackNavigator();


const SettingsNavigationManager = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SettingsStacks.SETTINGS} component={SettingsScreen} options={{ title: Strings.SETTINGS }}/>
        </Stack.Navigator>
    );
}

export default SettingsNavigationManager;