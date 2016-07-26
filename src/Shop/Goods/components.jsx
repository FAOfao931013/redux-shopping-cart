import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import countNumber from 'src/components/countNumber';
import './style.less';

let CountNumber = countNumber.containers;

class ShopGoods extends React.Component {
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
                                <CountNumber />
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

ShopGoods.propTypes = {
    products: React.PropTypes.instanceOf(Immutable.List),
    addToCart: React.PropTypes.func.isRequired,
    gotoCart: React.PropTypes.func.isRequired
};

export default ShopGoods;