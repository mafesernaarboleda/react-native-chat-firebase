
import React from 'react';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app/index';
import reducers from './app/reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

const chatalmundo = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('chatalmundo', () => chatalmundo);