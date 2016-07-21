import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';

const {Map, List} = Immutable;

const CALCULATE = 'CALCULATE';

export function calculateHandler(data) {
    return {
        type: CALCULATE,
        data: data,
        text: 'calculate cart'
    }
}

export function calculate() {
    return (dispatch, getState) => {

        //const carts = Map.isMap(getState().carts) ? getState().carts : localStorageToImmutable(localStore.get('shop').carts);

        //dispatch(calculateHandler(carts));
    }
}