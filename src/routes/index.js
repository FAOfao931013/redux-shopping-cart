import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import * as goods from 'src/Shop/goods';
import * as cart from 'src/Shop/cart';

let routes = (
    <div>
        <Route path="/shop" component={rootNode}>
            <Route path="goods" component={goods.containers}/>
            <Route path="cart" component={cart.containers}/>
        </Route>
    </div>
);

export default routes;