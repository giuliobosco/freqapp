import React, { Component } from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import MainComponent from './app/components/main.component/MainComponent'
import rootReducer from './app/reducers';
import freqlineStatusMiddleware from './app/middlewares/freqlineStatusMiddleware';

export default class App extends Component { 

  render() {
    const store = configureStore({
      reducer: rootReducer,
      middleware: [
        ...getDefaultMiddleware(),
        freqlineStatusMiddleware,
      ]
    });

    return(
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
  }
}