import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import * as actionTypes from './actionTypes';

const {
    ADD,
    MINUS,
    } = actionTypes;

export function AddNumber(id) {
    return {
        type: ADD,
        id: id,
        value: 1,
        text: 'add 1'
    }
}

export function MinusNumber(id) {
    return {
        type: MINUS,
        id: id,
        value: -1,
        text: 'minus 1'
    }
}
