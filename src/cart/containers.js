import { connect } from 'react-redux';
import ShoppingCart from './component';
import { mapStateToProps,mapDispatchToProps } from './selectors';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);