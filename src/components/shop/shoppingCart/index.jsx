import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { calculate, deleteProduct } from 'actions/shop/shoppingCart';
import { getAllProducts, backToGoods } from 'actions/shop/shopGoods';
import Immutable from 'immutable';
import './style.less';

const {Map} = Immutable;

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        let {
            data,
            totalPrice,
            totalNumber,
            deleteProduct
            } = this.props;

        //console.log(data);

        return (
            <div className='shopping-cart'>
                {
                    data &&
                    data.map(product => {
                        return (
                            <div
                                key={product.get('id')}
                                className='product'>
                                <div>商品名称:{product.get('name')}</div>
                                <div>商品数量:{product.get('count')}</div>
                                <div>商品价格:{product.get('price')}</div>
                                <button onClick={() => deleteProduct(product.get('id'),product.get('count'))}>删除
                                </button>
                            </div>
                        );
                    })
                }
                {
                    data &&
                    data.size ?
                        <div>
                            <div>总共:{totalNumber}件商品</div>
                            <div>总价:{totalPrice}元</div>
                        </div>
                        : <div>暂无商品</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: Map.isMap(state.carts) ? state.carts.get('data') : null,
        totalPrice: Map.isMap(state.carts) ? state.carts.get('totalPrice') : null,
        totalNumber: Map.isMap(state.carts) ? state.carts.get('totalNumber') : null
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllProducts() {
            dispatch(getAllProducts());
            dispatch(calculate());
        },
        deleteProduct(productId, productCount) {
            dispatch(deleteProduct(productId));
            dispatch(calculate());
            dispatch(backToGoods(productId, productCount))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);