import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Good from 'src/Good';
import * as Cart from 'src/Cart';

export default combineReducers({
    [Good.constants.NAME]: Good.reducer,
    [Cart.constants.NAME]: Cart.reducer,
    routing: routerReducer
});