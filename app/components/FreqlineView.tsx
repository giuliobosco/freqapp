import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Switch, Slider } from "react-native";
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@react-navigation/stack'

import { Colors, FreqlineValueConfig } from '../config/config';
import { updateStatus } from '../reducers/freqlineSlice';
import { Strings } from '../config/string';
import { TextInput } from 'react-native-gesture-handler';

const FreqlineView = ({
    freqline, 
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
    freqlineStartPush,
}:any) => {
    const { status, frequence, micTimer, decibel } = freqline;

    const statusChanged = (status:boolean) => updateStatus(status);
    const frequenceChanged = (frequence: number) => updateFrequence(frequence);
    const micTimerChanged = (micTimer:number) => updateMicTimer(micTimer);
    const decibelChanged = (decibel:number) => updateDecibel(decibel);
    const saveButtonPressed = () => freqlineStartPush();

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={[styles.row, styles.block]}>
                <Text style={styles.inputDescription}>{Strings.GENERATOR_STATUS}</Text>
                <Switch value={true}/>
            </View>
            <View style={styles.block}>
                <View style={styles.row}>
                    <Text style={styles.inputDescription}>{Strings.GENERATOR_FREQUENCE}</Text>
                    <TextInput style={styles.textInput} value={'25\'000 Hz'}/>
                </View>
                <View style={styles.line}></View>
                <View style={styles.row}>
                    <Slider style={{width: '100%'}} 
                        minimumValue={FreqlineValueConfig.frequence.min}
                        maximumValue={FreqlineValueConfig.frequence.max}/>
                </View>
            </View>
            <View style={[styles.block, styles.row]}>
                <Text style={styles.inputDescription}>{Strings.GENERATOR_MIC_TIMER}</Text>
                <TextInput style={styles.textInput} value={'30 s'}/>
            </View>
            <View style={[styles.block, styles.row]}>
                <Text style={styles.inputDescription}>{Strings.GENERATOR_DECIBEL}</Text>
                <TextInput style={styles.textInput} value={'50 db'}/>
            </View>
        </KeyboardAvoidingView>
    )
}

FreqlineView.prototype = {
    freqline: PropTypes.object.isRequired,
    updateStatus: PropTypes.func.isRequired,
    updateFrequence: PropTypes.object.isRequired,
    updateMicTimer: PropTypes.object.isRequired,
    updateDecibel: PropTypes.object.isRequired,
}

export default FreqlineView

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        marginTop: 35,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.WIDE_GRAY,
        backgroundColor: Colors.WHITE,
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    inputDescription: {
        color: '#000',
        fontSize: 18
    },
    textInput: {
        paddingVertical: 3,
        fontSize: 24,
    },
    line: {
        borderTopColor: Colors.WIDE_GRAY,
        borderTopWidth: 1,
        marginHorizontal: 10,
    },
});