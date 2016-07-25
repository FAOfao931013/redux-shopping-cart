import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shopGoods from './components';
import * as actions from './actions';
import {getProductsSelector} from './selectors';

const {
    getAllProducts,
    addToCart,
    } = actions;

function mapStateToProps(state) {
    return {
        products: getProductsSelector(state).products
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllProducts() {
            dispatch(getAllProducts());
        },
        addToCart(productId){
            dispatch(addToCart(productId));
        },
        gotoCart(){
            dispatch(push('/shop/cart'));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(shopGoods);