import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import routes from 'routes';
import { store, history } from 'store';
import localStore from 'localStore';
import Immutable from 'immutable';


//查看store数据
store.subscribe(() => {
    //存储数据到本地
    //console.log(store.getState());
    localStore.set('shop',store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            routes={routes}/>
    </Provider>,
    document.getElementById('fao')
);
