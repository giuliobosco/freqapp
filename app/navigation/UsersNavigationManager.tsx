import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersScreen from '../screens/UsersScreen';
import UserScreen from '../screens/UserScreen';
import { Strings } from '../config/string';
import { UsersStacks } from './Navigation';

const Stack = createStackNavigator();

const UsersNavigationManager = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UsersStacks.USERS} component={UsersScreen} options={{ title: Strings.USERS }}/>
            <Stack.Screen name={UsersStacks.USER} component={UserScreen} options={{ title: Strings.USER }}/>
        </Stack.Navigator>
    );
}

export default UsersNavigationManager;