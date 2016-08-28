import { combineReducers } from 'redux';

import times from './times.js';
import current_time from './current_time.js';

const rootReducer = combineReducers({times, current_time});

export default rootReducer;