const ADD = 'ADD';
const MINUS = 'MINUS';

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