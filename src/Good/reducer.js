import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {Map,List} = Immutable;

const {
    GOODS_GETALL,
    GOODS_ADDTOCART,
    GOODS_SETCOUNTNUMBER,
    CART_GETALL,
    CART_RECEIVEPRODUCTS,
    CART_DELETEPRODUCT
    } = actionTypes;

const initialState = Map({
    products: List(),
    text: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case GOODS_GETALL:
            return Map({
                products: action.goodProducts,
                text: action.text
            });
        case CART_GETALL:
            return Map({
                products: action.goodProducts,
                text: action.text
            });
        case GOODS_ADDTOCART:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        case CART_DELETEPRODUCT:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        case GOODS_SETCOUNTNUMBER:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        case CART_RECEIVEPRODUCTS:
            return state.update(
                newState => newState.set('products', goods(newState, action))
            );
        default:
            return state;
    }
};

function goods(state = Map(), action) {
    switch (action.type) {
        case GOODS_ADDTOCART:
        {
            const index = findById(action.id, state.get('products'));

            const oldProducts = state.get('products');

            const oldCount = oldProducts.get(index).get('count');

            const newItem = oldProducts.get(index).set('count', oldCount - action.countNumber);

            const newCount = newItem.get('count');

            const oldCountNumber = newItem.get('countNumber');

            const newCountNumber = oldCountNumber <= newCount ? oldCountNumber : 0;

            const newProduct = newItem.set('countNumber', newCountNumber);

            return oldProducts.set(index, newProduct);
        }
        case CART_DELETEPRODUCT:
        {
            const index = findById(action.id, state.get('products'));

            const oldProducts = state.get('products');

            const oldCount = oldProducts.get(index).get('count');

            const newItem = oldProducts.get(index)
                .set('count', oldCount + action.count)
                .set('countNumber', 0);

            return oldProducts.set(index, newItem);
        }
        case GOODS_SETCOUNTNUMBER:
        {
            const oldProducts = state.get('products');

            const index = findById(action.id, oldProducts);

            const product = oldProducts.get(index);

            const newProduct = product.set('countNumber', action.countNumber);

            return oldProducts.set(index, newProduct);
        }
        case CART_RECEIVEPRODUCTS:

            const oldProducts = state.get('products');

            const index = findById(action.id, oldProducts);

            const product = action.products.get(index);

            return oldProducts.set(index, product);
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
