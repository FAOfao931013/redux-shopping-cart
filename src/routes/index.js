import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import goods from 'src/Shop/Goods';
import cart from 'src/Shop/Cart';

let routes = (
    <div>
        <Route path="/shop" component={rootNode}>
            <Route path="goods" component={goods.containers}/>
            <Route path="cart" component={cart.containers}/>
        </Route>
    </div>
);

export default routes;