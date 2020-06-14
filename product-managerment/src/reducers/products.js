import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            return state.filter(p => p.id !== action.id);
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            var index = state.findIndex(p => p.id === action.product.id);
            state[index] = action.product;
            return [...state];
        default: return [...state];
    }
};

export default products;

