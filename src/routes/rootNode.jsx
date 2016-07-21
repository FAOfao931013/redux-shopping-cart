import React from 'react';
import ReactDOM from 'react-dom';

class rootNode extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default rootNode;