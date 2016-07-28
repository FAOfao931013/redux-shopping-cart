import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
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
    const goodsProducts = localStorageToImmutable(localStore.get('shop').goods.products);
    const cartsData = localStorageToImmutable(localStore.get('shop').carts.data);

    return {
        type: CART_GETALL,
        goodsProducts: goodsProducts,
        cartsData: cartsData,
        text: 'get carts products and data'
    }
}

export function calculate() {
    return {
        type: CART_CALCULATE,
        text: 'calculate cart'
    }
}

export function deleteProduct(productId, productCount) {
    return {
        type: CART_DELETEPRODUCT,
        id: productId,
        count: productCount,
        text: 'delete product from carts'
    }
}

function setNumberAction(productId, count) {
    return {
        type: CART_SETCOUNT,
        productId: productId,
        count: count,
        text: 'set cart count'
    }
}

function receiveCartProducts(products) {
    return {
        type: CART_RECEIVEPRODUCTS,
        products: products
    }
}

export function setNumber(productId, count) {
    return (dispatch, getState) => {
        dispatch(setNumberAction(productId, count));
        dispatch(receiveCartProducts(getState().carts.get('products')))
    };
}