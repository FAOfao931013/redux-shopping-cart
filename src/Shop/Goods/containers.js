import { connect } from 'react-redux';
import ShopGoods from './components';
import {mapStateToProps,mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopGoods);