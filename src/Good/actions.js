import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import Immutable from 'immutable';
import localStorageToImmutable from 'common/localStorageToImmutable';
import * as actionTypes from './actionTypes';

const {List, Map} = Immutable;

const {
    GOODS_GETALL,
    GOODS_ADDTOCART,
    GOODS_SETCOUNTNUMBER,
    } = actionTypes;

export function receiveAllProducts(goodProducts, cartData = List()) {
    return {
        type: GOODS_GETALL,
        goodProducts: goodProducts,
        cartData: cartData,
        text: 'get all products'
    }
}

export function getAllProducts() {
    return (dispatch, getState) => {
        if (!localStore.get('shop')) {
            return fetch('')
                .then(() => {
                    let products = List([
                        Map({
                            id: 1,
                            name: 'A',
                            count: 5,
                            price: 100
                        }),
                        Map({
                            id: 2,
                            name: 'B',
                            count: 10,
                            price: 200
                        }),
                        Map({
                            id: 3,
                            name: 'C',
                            count: 15,
                            price: 300
                        }),
                        Map({
                            id: 4,
                            name: 'D',
                            count: 15,
                            price: 300
                        }),
                        Map({
                            id: 5,
                            name: 'E',
                            count: 15,
                            price: 300
                        }),
                        Map({
                            id: 6,
                            name: 'F',
                            count: 15,
                            price: 300
                        }),
                        Map({
                            id: 7,
                            name: 'G',
                            count: 15,
                            price: 300
                        })
                    ]);
                    const newProducts = products.map(product => product.update(
                        newProduct => newProduct
                            .set('countNumber', 0)
                            .set('totalPrice', 0)
                    ));

                    dispatch(receiveAllProducts(newProducts));
                });
        } else {
            const goodProducts = localStorageToImmutable(localStore.get('shop').Good.products);
            const cartData = localStorageToImmutable(localStore.get('shop').Cart.data);

            dispatch(receiveAllProducts(goodProducts, cartData));
        }
    }
}

export function addToCart(productId, countNumber) {
    return {
        type: GOODS_ADDTOCART,
        id: productId,
        countNumber: countNumber,
        text: 'add product to cart'
    }

}

export function setCountNumber(id, countNumber) {
    return {
        type: GOODS_SETCOUNTNUMBER,
        id: id,
        countNumber: countNumber
    }
}
