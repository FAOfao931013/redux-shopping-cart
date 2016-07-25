import { connect } from 'react-redux';
import shoppingCart from './components';
import * as actions from './actions';
import goods from '../Goods/index';
import {getAllSelector} from './selectors';

const {
    getAllProducts,
    backToGoods
    } =  goods.actions;

const {
    calculate,
    deleteProduct,
    } = actions;

function mapStateToProps(state) {
    return {
        data: getAllSelector(state).data,
        totalPrice: getAllSelector(state).totalPrice,
        totalNumber: getAllSelector(state).totalNumber
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
)(shoppingCart);