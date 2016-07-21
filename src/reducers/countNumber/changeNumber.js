export default (state = {number:0}, action) => {
    switch (action.type) {
        case 'ADD':
            state.number += action.value;
            return Object.assign({}, state, {
                number: state.number,
                text: action.text
            });
        case 'MINUS':
            state.number += action.value;
            return Object.assign({}, state, {
                number: state.number,
                text: action.text
            });
        default:
            return state;
    }
};