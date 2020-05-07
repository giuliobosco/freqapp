import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersScreen from '../screens/UsersScreen';
import UserScreen from '../screens/UserScreen';
import { Strings } from '../config/string';

const Stack = createStackNavigator();

const UsersTabs = {
    USERS: 'users/users',
    USER: 'users/user'
}

const UsersNavigationManager = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UsersTabs.USERS} component={UsersScreen} options={{ title: Strings.USERS }}/>
            <Stack.Screen name={UsersTabs.USER} component={UserScreen} options={{ title: Strings.USER }}/>
        </Stack.Navigator>
    );
}

export { UsersTabs };

export default UsersNavigationManager;