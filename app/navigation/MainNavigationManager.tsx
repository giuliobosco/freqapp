import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FreqlineScreen from '../screens/FreqlineScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UnauthorizedView from '../components/UnauthorizedView';
import UsersNavigationManager from './UsersNavigationManager';
import { Strings } from '../config/string';

const Tab = createBottomTabNavigator();

const MainTabs = {
    FREQLINE: 'Freqline',
    USERS: 'Users',
    SETTINGS: 'Settings',
}

const MainNavigationManager = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case MainTabs.FREQLINE:
                                iconName = focused ? 'ios-list' : 'ios-list';
                                break;
                            case MainTabs.USERS:
                                iconName = focused ? 'ios-people' : 'ios-people';
                                break;
                            case MainTabs.SETTINGS:
                                iconName = focused ? 'ios-settings' : 'ios-settings';
                                break;
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name={MainTabs.FREQLINE} component={FreqlineScreen}  options={{ title: Strings.FREQLINE }}/>
                <Tab.Screen name={MainTabs.USERS} component={UsersNavigationManager} options={{ title: Strings.USERS }}/>
                <Tab.Screen name={MainTabs.SETTINGS} component={SettingsScreen} options={{ title: Strings.SETTINGS }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export { MainTabs };

export default MainNavigationManager;