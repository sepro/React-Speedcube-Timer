import { combineReducers } from 'redux';

import results from './results.js';
import current_time from './current_time.js';

const rootReducer = combineReducers({results, current_time});

export default rootReducer;