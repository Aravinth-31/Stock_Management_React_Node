import loggedReducer from './logged';
import stockReducer from './stocks';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    logged:loggedReducer,
    stock:stockReducer
});

export default reducers;