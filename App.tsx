import React, { Component } from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import MainComponent from './app/screens/MainScreen'
import rootReducer from './app/reducers';

import freqlineStatusMiddleware from './app/middlewares/freqlineStatusMiddleware';
import netInfoMiddleware from './app/middlewares/netInfoMiddleware';
import isLoggedInMiddleware from './app/middlewares/isLoggedInMiddleware';
import loginMiddleware from './app/middlewares/loginMiddleware';
import permissionsMiddleware from './app/middlewares/permissionsMiddleware';

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
      ]
    });

    return(
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
  }
}