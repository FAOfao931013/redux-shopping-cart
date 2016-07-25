import { createSelector } from 'reselect';
import Immutable from 'immutable';

const {Map} = Immutable;

const getData = state => Map.isMap(state.carts) ? state.carts.get('data') : null;
const getTotalPrice = state => Map.isMap(state.carts) ? state.carts.get('totalPrice') : null;
const getTotalNumber = state => Map.isMap(state.carts) ? state.carts.get('totalNumber') : null;

export const getAllSelector = createSelector(
    [getData, getTotalPrice, getTotalNumber],
    (data, totalPrice, totalNumber) => {
        return {
            data,
            totalPrice,
            totalNumber
        }
    }
);