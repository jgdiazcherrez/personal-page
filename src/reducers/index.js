import {combineReducers} from 'redux';
import  portfolio from './portfolio'
import tech from './tech'

const rootReducer = combineReducers({
    portfolio, tech
});

export default rootReducer
