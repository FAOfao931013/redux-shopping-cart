import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';
import { hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';
import localStore from 'localStore';
import Immutable from 'immutable';

const routeMiddleware = routerMiddleware(hashHistory);

const middleware = [
    Thunk,
    routeMiddleware
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

let store;

const localShop = localStore.get('shop');

if (localShop) {
    store = createStoreWithMiddleware(reducers, localShop);
} else {
    store = createStoreWithMiddleware(reducers);
}

const history = syncHistoryWithStore(hashHistory, store);

export { store, history };