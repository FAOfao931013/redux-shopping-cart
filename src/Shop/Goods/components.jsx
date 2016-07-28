import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import CountNumber from 'src/components/CountNumber';
import './style.less';

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
            setCountNumber
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
                                <CountNumber
                                    min={0}
                                    max={product.get('count')}
                                    value={product.get('countNumber')}
                                    onChange={number => setCountNumber(product.get('id'),number)}/>
                                {
                                    product.get('count') > 0 ?
                                        <div>
                                            <button
                                                onClick={() => addToCart(product.get('id'),product.get('countNumber'))}>
                                                加入购物车
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