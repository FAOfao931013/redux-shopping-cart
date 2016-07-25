import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import goods from '../Shop/Goods';
import cart from '../Shop/Cart';

export default combineReducers({
    [goods.constants.NAME]: goods.reducer,
    [cart.constants.NAME]: cart.reducer,
    routing: routerReducer
});