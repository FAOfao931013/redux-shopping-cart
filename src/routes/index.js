import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import * as Good from 'src/Good';
import * as Cart from 'src/Cart';

let routes = (
    <div>
        <Route path='/shop' component={rootNode}>
            <Route path='goods' component={Good.containers} />
            <Route path='cart' component={Cart.containers} />
        </Route>
    </div>
);

export default routes;