import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';

const {Map, List} = Immutable;

export const CALCULATE = 'CALCULATE';
export const DELETEPRODUCT = 'DELETEPRODUCT';

export function calculate() {
    return {
        type: CALCULATE,
        text: 'calculate cart'
    }
}

export function deleteProduct(productId) {
    return {
        type: DELETEPRODUCT,
        id: productId,
        text: 'delete product from carts'
    }
}