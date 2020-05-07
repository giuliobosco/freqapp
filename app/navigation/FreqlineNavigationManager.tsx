import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FreqlineScreen from '../screens/FreqlineScreen';
import { Strings } from '../config/string';
import { freqlineStartPush }  from '../reducers/freqlineSlice';
import { FreqlineStacks } from './Navigation';

const Stack = createStackNavigator();

const FreqlineNavigationManager = ({freqlineStartPush}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={FreqlineStacks.FREQLINE} 
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

export default connect(
    null,
    mapDispatchToProps,
)(FreqlineNavigationManager);