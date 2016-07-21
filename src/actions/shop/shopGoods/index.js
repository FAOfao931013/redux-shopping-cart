import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import Immutable from 'immutable';
import localStorageToImmutable from 'common/localStorageToImmutable';

const {List, Map} = Immutable;

const ALLPRODUCTS = 'ALLPRODUCTS';
const ADDTOCART = 'ADDTOCART';

export function receiveAllProducts(products, carts = List()) {
    return {
        type: ALLPRODUCTS,
        products: products,
        carts: carts,
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
                        })
                    ]);
                    dispatch(receiveAllProducts(products));
                });
        } else {
            const products = localStorageToImmutable(localStore.get('shop').goods.products);
            const carts = localStorageToImmutable(localStore.get('shop').carts.data);
            dispatch(receiveAllProducts(products, carts));
        }
    }
}

export function addToCart(productId) {
    return {
        type: ADDTOCART,
        id: productId,
        text: 'add product to cart'
    }
}
