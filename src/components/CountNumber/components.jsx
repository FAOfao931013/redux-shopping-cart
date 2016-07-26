import React from 'react';
import './style.less';

class CountNumber extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let {
            number,
            addNumber,
            minusNumber
            } = this.props;

        return (
            <div className='countNumber'>
                <button onClick={minusNumber}>-</button>
                <div>{number}</div>
                <button onClick={addNumber}>+</button>
            </div>
        )
    }
}

CountNumber.porpTypes = {
    number: React.PropTypes.number
};

export default CountNumber;