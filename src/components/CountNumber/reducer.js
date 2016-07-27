import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    ADD,
    MINUS,
    } = actionTypes;

const {Map} = Immutable;

export default (state, action) => {
    switch (action.type) {
        case ADD:
            return state.get('countNumber') + action.value;
        case MINUS:
            return state.get('countNumber') + action.value;
        default:
            return state;
    }
};