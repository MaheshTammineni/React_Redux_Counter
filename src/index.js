import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';// import provider component

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);// this is top of react root component
//we used our own context provider components
// we have store prop which we have to set in provider component and pass redux store value in it and that provide redux store to react app
