import React from 'react';
import classNames from 'classnames';

function List(props) {

    const cn = classNames('list-block', this.props.className, {});

    return (
        <div className={cn}>
            {props.children}
        </div>
    );
}

List.propTypes = {
    children: React.PropTypes.any.isRequired
};

export default List;