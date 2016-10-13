import React from 'react';
import classNames from 'classnames';
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

    componentDidMount() {
        this.setState({
            number: this.props.value ? this.props.value : 0
        });
    }

    componentWillReceiveProps(nextPros) {
        if (nextPros.value !== this.state.number) {
            this.setState({
                number: nextPros.value
            });
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
                <a
                    className={classNames('button', 'button-fill', 'button-raised', 'minus', {
                        disabled:number <= min
                    })}
                    onClick={this._minusNumber}>-</a>
                <input className='number' value={number} />
                <a
                    className={classNames('button', 'button-fill', 'button-raised', 'add', {
                        disabled:number >= max
                    })}
                    onClick={this._addNumber}>+</a>
            </div>
        );
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