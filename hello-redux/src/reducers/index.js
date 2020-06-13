import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';

//combine reducers
const myReducer = combineReducers({
    status: status,
    sort: sort
});

export default myReducer;