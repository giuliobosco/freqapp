import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import MainComponent from './app/screens/MainScreen'
import rootReducer from './app/reducers';

import freqlineStatusMiddleware from './app/middlewares/freqlineStatusMiddleware';
import netInfoMiddleware from './app/middlewares/netInfoMiddleware';
import isLoggedInMiddleware from './app/middlewares/isLoggedInMiddleware';
import loginMiddleware from './app/middlewares/loginMiddleware';
import permissionsMiddleware from './app/middlewares/permissionsMiddleware';
import logoutMiddleware from './app/middlewares/logoutMiddleware';
import freqlineFetchMiddleware from './app/middlewares/freqline/freqlineFetchMiddleware'
import freqlinePushMiddleware from './app/middlewares/freqline/freqlinePushMiddleware'
import { Colors } from './app/config/config';

export default class App extends Component { 

  render() {
    const store = configureStore({
      reducer: rootReducer,
      middleware: [
        ...getDefaultMiddleware(),
        freqlineStatusMiddleware,
        netInfoMiddleware,
        isLoggedInMiddleware,
        loginMiddleware,
        permissionsMiddleware,
        logoutMiddleware,
        freqlineFetchMiddleware,
        freqlinePushMiddleware,
      ]
    });

    return(
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} translucent={false} />
          <MainComponent/>
        </Provider>
      </SafeAreaProvider>
    );
  }
}