import Immutable from 'immutable';

const {Map} = Immutable;

export default (state = Map(), action) => {
    switch (action.type) {
        case 'ALLPRODUCTS':
            return Map({
                products: action.products,
                data: action.carts,
                text: action.text
            });
        case 'ADDTOCART':
            return state.update(
                newState => {
                    const index = findById(action.id, state.get('products'));

                    const oldData = newState.get('products');

                    const data = addToCart(newState.get('data'), oldData.get(index));

                    return newState
                        .set('data', data)
                }
            );
        case 'CALCULATE':
            return state.update(
                newState => {
                    return newState
                        .set('totalPrice', calculatePrice(newState.get('data')))
                        .set('totalNumber', calculateNumber(newState.get('data')))
                }
            );
        default:
            return state;
    }
};

export function findById(productId, data) {
    let _index;
    data.map((product, index) => {
        if (product.get('id') === productId) {
            _index = index;
        }
    });
    return _index;
}

export function addToCart(state, product, count = 1) {
    if (typeof findById(product.get('id'), state) === 'undefined') {
        return state.update(
            newState => {
                return newState.push(product.set('count', count));
            }
        );
    }

    return state.update(
        newState => {

            const index = findById(product.get('id'), state);

            const oldCount = newState.get(index).get('count');

            const newItem = newState.get(index).set('count', oldCount + count);

            return newState.set(index, newItem);
        }
    );
}

function calculatePrice(data = Map()) {
    let totalPrice = 0;

    data.map(product => {
        totalPrice += product.get('count') * product.get('price');
    });

    return totalPrice;
}

function calculateNumber(data = Map()) {
    let totalNumber = 0;

    data.map(product => {
        totalNumber += product.get('count');
    });
    return totalNumber;
}

