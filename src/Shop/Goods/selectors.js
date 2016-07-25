import { createSelector } from 'reselect';
import Immutable from 'immutable';

const {Map} = Immutable;

const getProducts = state => Map.isMap(state.goods) ? state.goods.get('products') : null;

export const getProductsSelector = createSelector(
    getProducts,
    (products) => {
        return {
            products
        }
    }
);