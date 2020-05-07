import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen';
import { Strings } from '../config/string';

const Stack = createStackNavigator();

const UsersTabs = {
    SETTINGS: 'settins/settings',
}

const SettingsNavigationManager = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UsersTabs.SETTINGS} component={SettingsScreen} options={{ title: Strings.SETTINGS }}/>
        </Stack.Navigator>
    );
}

export { UsersTabs };

export default SettingsNavigationManager;