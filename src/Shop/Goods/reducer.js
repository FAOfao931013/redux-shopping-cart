import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
const {Map,List} = Immutable;

const {
    ALLPRODUCTS,
    ADDTOCART,
    BACKTOGOODS,
    SETCOUNTNUMBER
    } = actionTypes;

const initialState = Map({
    products: List(),
    text: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ALLPRODUCTS:
            return Map({
                products: action.products,
                text: action.text
            });
        case ADDTOCART:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        case BACKTOGOODS:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        case SETCOUNTNUMBER:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        default:
            return state;
    }
};

function goods(state = Map(), action) {
    switch (action.type) {
        case ADDTOCART:
        {
            const index = findById(action.id, state.get('products'));

            const oldProducts = state.get('products');

            const oldCount = oldProducts.get(index).get('count');

            const newItem = oldProducts.get(index).set('count', oldCount - action.count);

            const newCount = newItem.get('count');

            const oldCountNumber = newItem.get('countNumber');

            const newCountNumber = oldCountNumber <= newCount ? oldCountNumber : newCount;

            const newProduct = newItem.set('countNumber', newCountNumber);

            return oldProducts.set(index, newProduct);
        }
        case BACKTOGOODS:
        {
            const index = findById(action.id, state.get('products'));

            const oldProducts = state.get('products');

            const oldCount = oldProducts.get(index).get('count');

            const newItem = oldProducts.get(index)
                .set('count', oldCount + action.count)
                .set('countNumber', 0);

            return oldProducts.set(index, newItem);
        }
        case SETCOUNTNUMBER:
        {
            const products = state.get('products');

            const index = findById(action.id, products);

            const product = products.get(index);

            const newProduct = product.set('countNumber', action.countNumber);

            return products.set(index, newProduct);
        }
        default:
            return state;
    }
}

function findById(productId, data) {
    let _index;
    data.map((product, index) => {
        if (product.get('id') === productId) {
            _index = index;
        }
    });
    return _index;
}
