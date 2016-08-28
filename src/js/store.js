import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index.js';

const defaultState = {results: [], current_time: 0};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export default store;
