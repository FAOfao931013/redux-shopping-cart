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

        console.log(_number);

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

        this.setState({
            number: this.state.number >= nextPros.max ? nextPros.max : this.state.number
        });
    }

    render() {

        let {
            number
            } = this.state;

        let {
            min,
            max
            } = this.props;

        console.log(number);

        return (
            <div className='countNumber'>
                <button
                    onClick={() => this._minusNumber()}
                    disabled={number<=min}>-
                </button>
                <div>{number}</div>
                <button
                    onClick={() => this._addNumber()}
                    disabled={number>=max}>+
                </button>
            </div>
        )
    }
}

CountNumber.porpTypes = {
    number: React.PropTypes.number
};

export default CountNumber;