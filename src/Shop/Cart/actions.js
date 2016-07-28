import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    CALCULATE,
    DELETEPRODUCT,
    CART_SETCOUNT,
    CART_RECEIVEPRODUCTS
    } = actionTypes;

const {Map, List} = Immutable;

export function calculate() {
    return {
        type: CALCULATE,
        text: 'calculate cart'
    }
}

export function deleteProduct(productId, productCount) {
    return {
        type: DELETEPRODUCT,
        id: productId,
        count: productCount,
        text: 'delete product from carts'
    }
}

export function setNumberAction(productId, count) {
    return {
        type: CART_SETCOUNT,
        productId: productId,
        count: count,
        text: 'set cart count'
    }
}
export function receiveCartProducts(products) {
    return {
        type: CART_RECEIVEPRODUCTS,
        products: products
    }
}

export function setNumber(productId, count) {
    return (dispatch, getState) => {
        dispatch(setNumberAction(productId, count));
        return (dispatch, getState) => {
            dispatch(getState().carts.get('products'))
        }
    };
}