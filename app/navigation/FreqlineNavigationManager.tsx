import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FreqlineScreen from '../screens/FreqlineScreen';
import { Strings } from '../config/string';

const Stack = createStackNavigator();

const UsersTabs = {
    FREQLINE: 'freqline',
}

const FreqlineNavigationManager = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UsersTabs.FREQLINE} component={FreqlineScreen} options={{ title: Strings.FREQLINE }}/>
        </Stack.Navigator>
    );
}

export { UsersTabs };

export default FreqlineNavigationManager;