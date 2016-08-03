import React from 'react';
import ReactDOM from 'react-dom';
import 'common/f7';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';
import configureStore from 'store/configureStore';
import localStore from 'localStore';
import Immutable from 'immutable';
import DevTools from 'src/DevTools';

let store;

const localShop = localStore.get('shop');

if (localShop) {
    store = configureStore(localShop);
} else {
    store = configureStore();
}

const history = syncHistoryWithStore(hashHistory, store);

//查看store数据
store.subscribe(() => {
    //存储数据到本地
    //console.log(store.getState());
    localStore.set('shop', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router
                history={history}
                routes={routes}/>
            {
                process.env.NODE_ENV === 'production' ? null : <DevTools />
            }
        </div>
    </Provider>,
    document.getElementById('fao')
);