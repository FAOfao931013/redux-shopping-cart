import React from 'react';
import Immutable from 'immutable';
import CountNumber from 'src/components/CountNumber';
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Toolbar from 'src/components/Toolbar';
import ListBlock from 'src/components/ListBlock';
import './style.less';

const {List, Item} = ListBlock;

class ShopGoods extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllProducts();
    }

    renderProducts(products) {
        let {
            addToCart,
            setCountNumber
            } = this.props;

        return products.map(product => (
            <Item
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
                                className='button button-fill button-raised button-orange add-cart'
                                onClick={() => addToCart(product.get('id'),product.get('countNumber'))}>
                                加入购物车
                            </button>
                        </div>
                        : <div>已售空</div>
                }
            </Item>
        ));
    }

    render() {
        let {
            products,
            gotoCart,
            } = this.props;

        return (
            <div className='shop-goods'>
                <Header
                    left={{
                        name:'返回'
                    }}
                    center='商品列表'
                    right={{
                        name:'购物车',
                        url:'/shop/cart'
                    }}/>

                <Content>
                    <List>
                        {products && this.renderProducts(products)}
                    </List>
                </Content>

                <Toolbar>
                    <button
                        className='button button-fill button-raised to-cart button-red'
                        onClick={gotoCart}>去购物车
                    </button>
                </Toolbar>

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