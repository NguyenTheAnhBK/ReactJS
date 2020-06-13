var initialState = [
    {
        id: 1,
        name: 'iPhone 11 Pro Max',
        price: 1500,
        status: true
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 11',
        price: 1000,
        status: false
    },
    {
        id: 3,
        name: 'Samsung Galaxy Fold',
        price: 3000,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;

