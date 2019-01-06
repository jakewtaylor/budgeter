import { combineReducers } from 'redux';

import transactions from './transactions';
import jars from './jars';
import preferences from './preferences';

export default combineReducers({
    transactions,
    jars,
    preferences,
});
