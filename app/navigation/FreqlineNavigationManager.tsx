import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import FreqlineScreen from '../screens/FreqlineScreen';
import { Strings } from '../config/string';
import { freqlineStartPush }  from '../reducers/freqlineSlice';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

const UsersTabs = {
    FREQLINE: 'freqline',
}

const FreqlineNavigationManager = ({freqlineStartPush}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UsersTabs.FREQLINE} 
                component={FreqlineScreen} 
                options={{ 
                    title: Strings.FREQLINE,
                    headerRight: () => (
                        <Button onPress={() => freqlineStartPush()}
                            title={Strings.SAVE}/>
                    )
                }}/>
        </Stack.Navigator>
    );
}

FreqlineNavigationManager.prototype = {
    freqlineStartPush: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    freqlineStartPush,
}

export { UsersTabs };

export default connect(
    null,
    mapDispatchToProps,
)(FreqlineNavigationManager);