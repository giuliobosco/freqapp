import React, { Component } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import MainComponent from './app/components/main.component/MainComponent'
import rootReducer from './app/reducers';

export default class App extends Component { 

  render() {
    const store = configureStore({
      reducer: rootReducer,
    });

    return(
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
  }
}