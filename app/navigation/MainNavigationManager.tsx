import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import FreqlineScreen from '../screens/FreqlineScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UnauthorizedView from '../components/UnauthorizedView';
import UsersNavigationManager from './UsersNavigationManager';

import { permissionsStartCheck } from '../reducers/authSlice';

import { Strings } from '../config/string';
import { Permissions } from '../config/config';
import useFetching from '../utils/useFetching';
import LoadingView from '../components/LoadingView';

const Tab = createBottomTabNavigator();

const MainTabs = {
    FREQLINE: 'Freqline',
    USERS: 'Users',
    SETTINGS: 'Settings',
}

const MainNavigationManager = ({ auth, permissionsStartCheck }: any) => {

    useFetching(permissionsStartCheck)

    const { isLoadingPermission, permissions } = auth;

    if (isLoadingPermission) {
        return (<LoadingView />);
    }

    if (permissions.length === 0) {
        return (<UnauthorizedView />);
    }

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

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                })}>
                {_.indexOf(permissions, Permissions.USER) > -1 ? <Tab.Screen name={MainTabs.FREQLINE} component={FreqlineScreen} options={{ title: Strings.FREQLINE }} /> : null}
                {_.indexOf(permissions, Permissions.ADMIN) > -1 ? <Tab.Screen name={MainTabs.USERS} component={UsersNavigationManager} options={{ title: Strings.USERS }} /> : null}
                {_.indexOf(permissions, Permissions.USER) > -1 ? <Tab.Screen name={MainTabs.SETTINGS} component={SettingsScreen} options={{ title: Strings.SETTINGS }} /> : null}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

MainNavigationManager.prototype = {
    login: PropTypes.object.isRequired,
    permissionsStartCheck: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    permissionsStartCheck,
}

export { MainTabs };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainNavigationManager);
