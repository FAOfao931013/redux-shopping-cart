import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import ShoppingCart from './components';
import * as actions from './actions';
import { getAllSelector } from './selectors';

const {
    calculate,
    deleteProduct,
    setNumber,
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
        calculateAll() {
            dispatch(calculate());
        },
        deleteProduct(productId, productCount) {
            dispatch(deleteProduct(productId, productCount));
            dispatch(calculate());
        },
        goBack(){
            dispatch(goBack());
        },
        setNumber(productId, count){
            dispatch(setNumber(productId, count));
            dispatch(calculate());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);