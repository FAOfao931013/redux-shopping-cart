import React from 'react';
import { connect } from 'react-redux';
import { push, go } from 'react-router-redux';
import './style.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    go(event, history) {
        if (event === 'back') {
            this.props.dispatch(go(-1));
        } else if (event === 'forward') {
            this.props.dispatch(go(1));
        } else {
            this.props.dispatch(go(history));
        }
    }

    goto(url) {
        if (url) {
            this.props.dispatch(push(url));
        } else {
            return;
        }
    }

    render() {
        let {
            left,
            center,
            right,
            } = this.props;
        return (
            <div className="header">
                <div className="navbar">
                    <div className="navbar-inner">
                        <div
                            className="left link"
                            onClick={() => this.go(left.event)}>{left.name}
                        </div>
                        <div className="center">{center}</div>
                        <div
                            className="right link"
                            onClick={() => this.goto(right.url)}>{right.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Header);