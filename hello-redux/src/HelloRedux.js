import {createStore} from 'redux';
import {statusAction, sortAction} from './actions/index';
import myReducer from './reducers/index';


const store = createStore(myReducer);
console.log(store.getState());

//action: toggle status
//var action = {type: 'TOGGLE_STATUS'};
store.dispatch(statusAction());
console.log('action: toggle status: ', store.getState());

//action: sort
//var action2 = {type: 'SORT', sort: {by: 'name', value: -1}};
store.dispatch(sortAction({by: 'name', value: -1}));
console.log('action: sort: ', store.getState());