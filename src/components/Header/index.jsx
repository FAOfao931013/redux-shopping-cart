import React from 'react';
import { connect } from 'react-redux';
import { push, go } from 'react-router-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    go(event, history) {
        if (event === 'back') {
            this.props.go(-1);
        } else if (event === 'forward') {
            this.props.go(1);
        } else {
            this.props.go(history);
        }
    }

    goto(url) {
        if (url) {
            this.props.goto(url);
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
                            className="left"
                            onClick={() => this.go(left.event)}>{left.name}</div>
                        <div className="center">{center}</div>
                        <div
                            className="right"
                            onClick={() => this.goto(right.url)}>{right.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        go(history){
            dispatch(go(history));
        },
        goto(url){
            dispatch(push(url))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);