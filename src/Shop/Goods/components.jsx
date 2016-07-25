import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import './style.less';

const {Map} = Immutable;

class shopGoods extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        let {
            products,
            addToCart,
            gotoCart,
            } = this.props;

        return (
            <div className='shop-goods'>
                {
                    products &&
                    products.map(product => {
                        return (
                            <div
                                key={product.get('id')}
                                className='product'>
                                <div>商品名称:{product.get('name')}</div>
                                <div>商品数量:{product.get('count')}</div>
                                <div>商品价格:{product.get('price')}</div>
                                {
                                    product.get('count') > 0 ?
                                        <div>
                                            <button
                                                onClick={() => addToCart(product.get('id'))}>加入购物车
                                            </button>
                                        </div>
                                        : <div>已售空</div>
                                }
                            </div>
                        );
                    })
                }
                <button
                    className='to-cart'
                    onClick={gotoCart}>去购物车
                </button>
            </div>
        );
    }
}

export default shopGoods;