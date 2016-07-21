import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { AddNumber, MinusNumber } from 'actions/countNumber';

class CountNumber extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {
            addNumber,
            minusNumber,
            number
            } = this.props;

        return (
            <div>
                <div>number:{number}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        number: state.changeNumber.number,
        text: state.changeNumber.text
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addNumber: () => dispatch(AddNumber()),
        minusNumber: () => dispatch(MinusNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountNumber);