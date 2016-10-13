import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { goBack } from 'react-router-redux';
import * as actions from './actions';
import { NAME } from './constants';

const {Map} = Immutable;

const {
    calculate,
    deleteProduct,
    setNumber,
    getAll
    } = actions;

const getData = state => Map.isMap(state[NAME]) ? state[NAME].get('data') : null;
const getTotalPrice = state => Map.isMap(state[NAME]) ? state[NAME].get('totalPrice') : null;
const getTotalNumber = state => Map.isMap(state[NAME]) ? state[NAME].get('totalNumber') : null;

export const getAllSelector = createSelector(
    [getData, getTotalPrice, getTotalNumber],
    (data, totalPrice, totalNumber) => {
        return {
            data,
            totalPrice,
            totalNumber
        };
    }
);

export function mapStateToProps(state) {
    return {
        data: getAllSelector(state).data,
        totalPrice: getAllSelector(state).totalPrice,
        totalNumber: getAllSelector(state).totalNumber
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAll() {
            dispatch(getAll());
            dispatch(calculate());
        },
        deleteProduct(productId, productCount) {
            dispatch(deleteProduct(productId, productCount));
            dispatch(calculate());
        },
        goBack() {
            dispatch(goBack());
        },
        setNumber(productId, count, index) {
            dispatch(setNumber(productId, count, index));
            dispatch(calculate());
        }
    };
}