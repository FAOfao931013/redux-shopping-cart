import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import * as actionTypes from './actionTypes';

const {
    ADD,
    MINUS,
    } = actionTypes;

export function AddNumber() {
    return {
        type: ADD,
        value: 1,
        text: 'add 1'
    }
}

export function MinusNumber() {
    return {
        type: MINUS,
        value: -1,
        text: 'minus 1'
    }
}
