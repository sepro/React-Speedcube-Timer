import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index.js';

const defaultState = {times: []};

const store = createStore(rootReducer, defaultState);

export default store;
