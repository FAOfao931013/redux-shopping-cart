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
                                <div className="good-name">商品名称:{product.get('name')}</div>
                                <div className="good-price">价格:¥{product.get('price')}</div>
                                <div className="count-number">
                                    <div>数量</div>
                                    <CountNumber
                                        min={0}
                                        max={product.get('count')}
                                        value={product.get('countNumber')}
                                        onChange={number => setCountNumber(product.get('id'),number)}/>
                                    <div>库存:{product.get('count')}件</div>
                                </div>
                                {
                                    product.get('count') > 0 ?
                                        <div>
                                            <button
                                                className='button button-fill button-raised button-orange'
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
                    className='button button-fill button-raised to-cart button-red'
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