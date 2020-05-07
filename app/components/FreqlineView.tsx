import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Switch, Slider, ScrollView } from "react-native";
import PropTypes from 'prop-types';

import { Colors, FreqlineValueConfig } from '../config/config';
import { Strings } from '../config/string';
import { TextInput } from 'react-native-gesture-handler';
import { intInRange } from '../utils/validators';

const FreqlineView = ({
    freqline,
    updateStatus,
    updateFrequence,
    updateMicTimer,
    updateDecibel,
    freqlineStartPush,
}: any) => {
    const [frequenceInternal, setFrequenceInternal] = useState(-1);

    const { status, frequence, micTimer, decibel } = freqline;

    if (frequenceInternal < 0) {
        setFrequenceInternal(frequence);
    }

    const statusChanged = (status: boolean) => updateStatus(status);

    const frequenceChangedInt = (frequence: number) => {
        updateFrequence(intInRange(
            frequence,
            FreqlineValueConfig.frequence.min,
            FreqlineValueConfig.frequence.max
        ))
    }

    const frequenceChangedString = (frequence: string) => {
        frequenceChangedInt(+frequence);
        setFrequenceInternal(intInRange(
            +frequence,
            FreqlineValueConfig.frequence.min,
            FreqlineValueConfig.frequence.max
        ))
    }

    const frequenceChangingInt = (frequence: number) => {
        setFrequenceInternal(Math.floor(frequence));
    }

    const micTimerChanged = (micTimer: string) => {
        var micTimerInt: number = +micTimer;
        if (micTimerInt > FreqlineValueConfig.micTimer.max) {
            micTimerInt = FreqlineValueConfig.micTimer.max;
        }

        if (micTimerInt < FreqlineValueConfig.micTimer.min) {
            micTimerInt = FreqlineValueConfig.micTimer.min;
        }

        micTimerInt = Math.floor(micTimerInt);
        updateMicTimer(micTimerInt + '')
    }

    const decibelChanged = (decibel: string) => {
        var decibelInt = +decibel;
        if (decibelInt > FreqlineValueConfig.decibel.max) {
            decibelInt = FreqlineValueConfig.decibel.max;
        }

        if (decibelInt < FreqlineValueConfig.decibel.min) {
            decibelInt = FreqlineValueConfig.decibel.max;
        }

        decibelInt = Math.floor(decibelInt);
        updateDecibel(decibelInt + '');
    }
    const saveButtonPressed = () => freqlineStartPush();

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView style={styles.container}>
                <View style={[styles.row, styles.block]}>
                    <Text style={styles.inputDescription}>{Strings.GENERATOR_STATUS}</Text>
                    <Switch value={status} onValueChange={statusChanged} />
                </View>
                <View style={styles.block}>
                    <View style={styles.row}>
                        <Text style={styles.inputDescription}>
                            {Strings.GENERATOR_FREQUENCE}
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.textInput}
                                value={String(frequenceInternal)}
                                onChangeText={frequenceChangedString}
                                keyboardType='number-pad'
                                caretHidden={true} />
                            <Text style={styles.textInput}>
                                {' ' + FreqlineValueConfig.decibel.unitMeasure}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.row}>
                        <Slider style={styles.w100}
                            value={frequenceInternal}
                            minimumValue={FreqlineValueConfig.frequence.min}
                            maximumValue={FreqlineValueConfig.frequence.max}
                            onValueChange={value => frequenceChangingInt(value)}
                            onSlidingComplete={value => frequenceChangedInt(value)} />
                    </View>
                </View>
                <View style={[styles.block, styles.row]}>
                    <Text style={styles.inputDescription}>
                        {Strings.GENERATOR_MIC_TIMER}
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput}
                            value={micTimer + ''}
                            onChangeText={micTimerChanged}
                            keyboardType='number-pad' />
                        <Text style={styles.textInput}>
                            {' ' + FreqlineValueConfig.micTimer.unitMeasure}
                        </Text>
                    </View>
                </View>
                <View style={[styles.block, styles.row]}>
                    <Text style={styles.inputDescription}>
                        {Strings.GENERATOR_DECIBEL}
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput}
                            value={decibel + ''}
                            onChangeText={decibelChanged}
                            keyboardType='number-pad' />
                        <Text style={styles.textInput}>
                            {' ' + FreqlineValueConfig.decibel.unitMeasure}
                        </Text>
                    </View>
                </View>
            </ScrollView>
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
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    center: {
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 3,
        fontSize: 24,
        alignSelf: 'center',
        color: Colors.LIGHT_BLUE,
    },
    line: {
        borderTopColor: Colors.WIDE_GRAY,
        borderTopWidth: 1,
        marginHorizontal: 10,
    },
    w100: {
        width: '100%',
    },
});