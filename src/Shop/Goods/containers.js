import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ShopGoods from './components';
import * as actions from './actions';
import {getProductsSelector} from './selectors';

const {
    getAllProducts,
    addToCart,
    setCountNumber
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
        },
        setCountNumber(id, number){
            dispatch(setCountNumber(id, number));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopGoods);