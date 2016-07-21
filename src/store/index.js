import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';
import { hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';
import localStore from 'localStore';
import Immutable from 'immutable';

const reduce = combineReducers({
    ...reducers,
    routing: routerReducer
});

const routeMiddleware = routerMiddleware(hashHistory);

const middleware = [
    Thunk,
    routeMiddleware
];

//初始化store
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

let store;

const localShop = localStore.get('shop');

if (localShop) {
    store = createStoreWithMiddleware(reduce, localShop);
} else {
    store = createStoreWithMiddleware(reduce);
}

const history = syncHistoryWithStore(hashHistory, store);

export { store, history };