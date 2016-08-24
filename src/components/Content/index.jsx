import React from 'react';
import './style.less'

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="page-content">
                    {this.props.children}
            </div>
        )
    }
}

export default Content;