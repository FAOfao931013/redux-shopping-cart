import React from 'react';
import './style.less';

class CountNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };

        this._addNumber = this._addNumber.bind(this);
        this._minusNumber = this._minusNumber.bind(this);
    }

    _addNumber() {

        let _number = this.state.number;

        _number = _number + 1;

        this.setState({
            number: _number
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(_number);
        }
    }

    _minusNumber() {

        let _number = this.state.number;

        _number = _number - 1;

        this.setState({
            number: _number
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(_number);
        }
    }

    componentWillReceiveProps(nextPros) {
        if (nextPros.value !== this.state.number || !nextPros.value) {
            this.setState({
                number: nextPros.value ? nextPros.value : 0
            })
        }
    }

    render() {

        let {
            number
            } = this.state;

        let {
            min,
            max
            } = this.props;

        return (
            <div className='countNumber'>
                <button
                    onClick={this._minusNumber}
                    disabled={number<=min}>-
                </button>
                <div>{number}</div>
                <button
                    onClick={this._addNumber}
                    disabled={number>=max}>+
                </button>
            </div>
        )
    }
}

CountNumber.porpTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number
};

CountNumber.defaultProps = {
    max: 99999,
    min: 0
};

export default CountNumber;