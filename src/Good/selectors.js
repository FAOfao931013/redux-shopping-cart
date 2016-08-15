import { createSelector } from 'reselect';
import Immutable from 'immutable';
import * as actions from './actions';
import { push } from 'react-router-redux';
import { NAME } from './constants';

const {Map} = Immutable;

const {
    getAllProducts,
    addToCart,
    setCountNumber,
    } = actions;

const getProducts = state => Map.isMap(state[NAME]) ? state[NAME].get('products') : null;

export const getProductsSelector = createSelector(
    [getProducts],
    (products) => {
        return {
            products
        }
    }
);

export function mapStateToProps(state) {
    return {
        products: getProductsSelector(state).products
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllProducts() {
            dispatch(getAllProducts());
        },
        addToCart(productId, countNumber){
            dispatch(addToCart(productId, countNumber));
        },
        gotoCart(){
            dispatch(push('/shop/cart'));
        },
        setCountNumber(id, number){
            dispatch(setCountNumber(id, number));
        }
    }
}
