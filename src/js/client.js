import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import styles from '../css/style.styl'; // eslint-disable-line

import store from './store';

import App from "./app";

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    app);