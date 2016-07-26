import React from 'react';
import { connect } from 'react-redux';
import CountNumber from './components';
import * as actions from './actions';
import {getNumberSelector} from './selectors';
import Immutable from 'immutable';

const {Map} = Immutable;

const {
    AddNumber,
    MinusNumber,
    } = actions;

function mapStateToProps(state) {
    return {
        number: getNumberSelector(state).number
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addNumber: () => dispatch(AddNumber()),
        minusNumber: () => dispatch(MinusNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountNumber);