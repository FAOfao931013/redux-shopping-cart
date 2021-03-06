import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    CART_CALCULATE,
    CART_DELETEPRODUCT,
    CART_SETCOUNT,
    CART_RECEIVEPRODUCTS,
    CART_GETALL
    } = actionTypes;

const {Map, List} = Immutable;

export function getAll() {
    const goodProducts = localStorageToImmutable(localStore.get('shop').Good.products);
    const cartData = localStorageToImmutable(localStore.get('shop').Cart.data);

    return {
        type: CART_GETALL,
        goodProducts: goodProducts,
        cartData: cartData,
        text: 'get carts products and data'
    };
}

export function calculate() {
    return {
        type: CART_CALCULATE,
        text: 'calculate cart'
    };
}

export function deleteProduct(productId, productCount) {
    return {
        type: CART_DELETEPRODUCT,
        id: productId,
        count: productCount,
        text: 'delete product from carts'
    };
}

function setNumberAction(productId, count, index) {
    return {
        type: CART_SETCOUNT,
        productId: productId,
        count: count,
        index: index,
        text: 'set cart count'
    };
}

function receiveCartProducts(products, productId) {
    return {
        type: CART_RECEIVEPRODUCTS,
        products: products,
        id: productId
    };
}

export function setNumber(productId, count, index) {
    return (dispatch, getState) => {
        dispatch(setNumberAction(productId, count, index));
        dispatch(receiveCartProducts(getState().Cart.get('products'), productId));
    };
}