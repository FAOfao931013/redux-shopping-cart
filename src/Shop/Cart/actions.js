import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    CALCULATE,
    DELETEPRODUCT,
    } = actionTypes;

const {Map, List} = Immutable;

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