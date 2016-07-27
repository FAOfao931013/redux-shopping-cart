import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ShopGoods from './components';
import * as actions from './actions';
import {getProductsSelector} from './selectors';

const {
    getAllProducts,
    addToCart,
    } = actions;

function mapStateToProps(state) {
    return {
        products: getProductsSelector(state).products,
        countNumber: getProductsSelector(state).countNumber
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllProducts() {
            dispatch(getAllProducts());
        },
        addToCart(productId, countNumber){
            dispatch(addToCart(productId, countNumber));
        },
        gotoCart(){
            dispatch(push('/shop/cart'));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopGoods);