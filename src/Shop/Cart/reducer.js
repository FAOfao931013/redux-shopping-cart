import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {Map,List} = Immutable;

const {
    CALCULATE,
    DELETEPRODUCT,
    CART_SETCOUNT,
    ALLPRODUCTS,
    ADDTOCART
    } = actionTypes;

const initialState = Map({
    products: List(),
    data: List(),
    totalPrice: 0,
    totalNumber: 0,
    text: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ALLPRODUCTS:
            return Map({
                products: action.goodsProducts,
                data: action.cartsData,
                text: action.text
            });
        case ADDTOCART:
            if (action.countNumber !== 0) {
                return state.update(
                    newState => newState.set('data', carts(newState, action))
                );
            } else {
                return state;
            }
        case CALCULATE:
            return state.update(
                newState => {
                    return newState
                        .set('totalPrice', calculatePrice(newState.get('data')))
                        .set('totalNumber', calculateNumber(newState.get('data')))
                }
            );
        case CART_SETCOUNT:
            return state.update(
                newState => newState
                    .set('data', carts(newState, action).newData)
                    .set('products', carts(newState, action).newProducts)
            );
        case DELETEPRODUCT:
            return state.update(
                newState => newState.set('data', carts(newState, action))
            );
        default:
            return state;
    }
};

function carts(state = Map(), action) {
    switch (action.type) {
        case ADDTOCART:
        {
            const oldProducts = state.get('products');

            const index = findById(action.id, oldProducts);

            return addToCart(state.get('data'), oldProducts.get(index), action.countNumber);
        }
        case CART_SETCOUNT:
        {
            const totalCount = calculateTotalCount(state, action.productId);

            const oldData = state.get('data');

            const oldProducts = state.get('products');

            const index = findById(action.productId, oldProducts);

            const newDataItem = oldData.get(index).set('count', action.count);

            const newProductsItem = oldProducts.get(index).set('count', totalCount - action.count);

            const newData = oldData.set(index, newDataItem);

            const newProducts = oldProducts.set(index, newProductsItem);

            return {
                newData,
                newProducts
            }
        }
        case DELETEPRODUCT:
        {
            const oldData = state.get('data');

            const index = findById(action.id, oldData);

            return deleteProduct(oldData, index);
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

function addToCart(state, product, count = 1) {
    if (typeof findById(product.get('id'), state) === 'undefined') {
        return state.update(
            newState => {
                return newState.push(product.set('count', count));
            }
        );
    }

    return state.update(
        newState => {

            const index = findById(product.get('id'), state);

            const oldCount = newState.get(index).get('count');

            const newItem = newState.get(index).set('count', oldCount + count);

            return newState.set(index, newItem);
        }
    );
}

function calculatePrice(data = Map()) {
    let totalPrice = 0;

    data.map(product => {
        totalPrice += product.get('count') * product.get('price');
    });

    return totalPrice;
}

function calculateNumber(data = Map()) {
    let totalNumber = 0;

    data.map(product => {
        totalNumber += product.get('count');
    });
    return totalNumber;
}

function deleteProduct(data, index) {
    return data.update(
        newData => {
            return newData.delete(index);
        }
    );
}

function calculateTotalCount(state, productId) {
    const index = findById(productId, state.get('products'));

    const productCount = state.get('products').get(index).get('count');

    const dataCount = state.get('data').get(index).get('count');

    return productCount + dataCount;
}