import React from 'react';
import './style.less';

class CountNumber extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let {
            id,
            number,
            addNumber,
            minusNumber,
            min,
            max
            } = this.props;

        return (
            <div className='countNumber'>
                <button
                    onClick={() => minusNumber(id)}
                    disabled={number<=min}>-
                </button>
                <div>{number}</div>
                <button
                    onClick={() => addNumber(id)}
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