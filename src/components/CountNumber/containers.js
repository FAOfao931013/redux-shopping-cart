import React from 'react';
import { connect } from 'react-redux';
import CountNumber from './components';
import * as actions from './actions';
//import {getNumberSelector} from './selectors';
import Immutable from 'immutable';

const {
    AddNumber,
    MinusNumber,
    } = actions;

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addNumber(id){
            dispatch(AddNumber(id))
        },
        minusNumber(id){
            dispatch(MinusNumber(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountNumber);