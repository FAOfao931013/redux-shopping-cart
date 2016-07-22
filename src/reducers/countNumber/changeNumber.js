import Immutable from 'immutable';

const {Map} = Immutable;

export default (state = Map({number: 0}), action) => {
    switch (action.type) {
        case'ADD':
            return state.update(
                newState => newState
                    .set('number', newState.get('number') + 1)
                    .set('text', action.text)
            );
        case'MINUS':
            return state.update(
                newState => newState
                    .set('number', newState.get('number') - 1)
                    .set('text', action.text)
            );
        case'INITIALIZATION':
            return state.update(
                newState => newState
                    .set('number', 0)
                    .set('text', action.text)
            );
        default:
            return state;
    }
};