import Immutable from 'immutable';

const {Map} = Immutable;

export default (state = Map(), action) => {
    switch (action.type) {
        case 'ALLPRODUCTS':
            return Map({
                products: action.products,
                text: action.text
            });
        case 'ADDTOCART':
            return state.update(
                newState => {
                    const index = findById(action.id, state.get('products'));

                    const oldData = newState.get('products');

                    const oldCount = oldData.get(index).get('count');

                    const newItem = oldData.get(index).set('count', oldCount - 1);

                    const newData = oldData.set(index, newItem);

                    return newState
                        .set('products', newData)
                }
            );
        case 'BACKTOGOODS':
            return state.update(
                newState => {
                    const index = findById(action.id, state.get('products'));

                    const oldData = newState.get('products');

                    const oldCount = oldData.get(index).get('count');

                    const newItem = oldData.get(index).set('count', oldCount + action.count);

                    const newData = oldData.set(index, newItem);

                    return newState
                        .set('products', newData)
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
