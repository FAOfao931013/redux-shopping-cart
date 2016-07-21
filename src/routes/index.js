import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import shopGoods from 'components/Shop/Goods';
import shoppingCart from 'components/Shop/shoppingCart';

let routes = (
    <div>
        <Route path="/shop" component={rootNode}>
            <Route path="goods" component={shopGoods}/>
            <Route path="cart" component={shoppingCart}/>
        </Route>
    </div>
);

export default routes;