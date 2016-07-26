import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    ADD,
    MINUS,
    } = actionTypes;

const {Map} = Immutable;

const initialState = Map({
    number: 0,
    text: 'countNumber'
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.update(
                newState => newState
                    .set('number', newState.get('number') + 1)
                    .set('text', action.text)
            );
        case MINUS:
            return state.update(
                newState => newState
                    .set('number', newState.get('number') - 1)
                    .set('text', action.text)
            );
        default:
            return state;
    }
};