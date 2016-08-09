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

export function receiveAllProducts(goodsProducts, cartsData = List()) {
    return {
        type: GOODS_GETALL,
        goodsProducts: goodsProducts,
        cartsData: cartsData,
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
                    const newProducts = products.map(product => product.update(
                        newProduct => newProduct
                            .set('countNumber', 0)
                            .set('totalPrice', 0)
                    ));

                    dispatch(receiveAllProducts(newProducts));
                });
        } else {
            const goodsProducts = localStorageToImmutable(localStore.get('shop').goods.products);
            const cartsData = localStorageToImmutable(localStore.get('shop').carts.data);

            dispatch(receiveAllProducts(goodsProducts, cartsData));
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
