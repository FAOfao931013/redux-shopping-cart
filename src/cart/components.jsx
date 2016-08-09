import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import CountNumber from 'src/components/CountNumber';
import './style.less';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAll();
    }

    render() {
        let {
            data,
            totalPrice,
            totalNumber,
            deleteProduct,
            goBack,
            setNumber
            } = this.props;

        return (
            <div className='shopping-cart'>
                {
                    data &&
                    data.map((product, index) => {
                        return (
                            <div
                                key={product.get('id')}
                                className='product'>
                                <div className="good-name">商品名称:{product.get('name')}</div>
                                <div className="good-price">商品单价:¥{product.get('price')}</div>
                                <div className="count-number">
                                    <div>数量:</div>
                                    <CountNumber
                                        max={product.get('totalCount')}
                                        min={1}
                                        value={product.get('count')}
                                        onChange={count => setNumber(product.get('id'),count,index)}/>
                                    <div className="good-totalPrice">金额:¥{product.get('totalPrice')}</div>
                                </div>
                                <button
                                    className="button button-fill button-raised button-orange "
                                    onClick={() => deleteProduct(product.get('id'),product.get('count'))}>
                                    删除
                                </button>
                            </div>
                        );
                    })
                }
                {
                    data &&
                    data.size ?
                        <div className="total-area">
                            <div>总共:{totalNumber}件商品</div>
                            <div>合计:{totalPrice}元</div>
                        </div>
                        : <div>暂无商品</div>
                }
                <button
                    className='button button-fill button-raised to-cart button-red'
                    onClick={goBack}>返回</button>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    data: React.PropTypes.instanceOf(Immutable.List),
    totalPrice: React.PropTypes.number,
    totalNumber: React.PropTypes.number,
    deleteProduct: React.PropTypes.func.isRequired,
    goBack: React.PropTypes.func.isRequired
};

export default ShoppingCart;