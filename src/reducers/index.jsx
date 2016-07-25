import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import goods from 'src/Shop/Goods';
import cart from 'src/Shop/Cart';

export default combineReducers({
    [goods.constants.NAME]: goods.reducer,
    [cart.constants.NAME]: cart.reducer,
    routing: routerReducer
});