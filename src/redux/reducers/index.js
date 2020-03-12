import { combineReducers } from 'redux';
import counter from './counterReducer';
import profile from './profileReducer';


export default combineReducers({
    counter: counter,
    profile: profile
});