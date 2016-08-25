import React from 'react';
import classNames from 'classnames';

function Item(props) {

    const cn = classNames('item-content', this.props.className, {});

    return (
        <li className={cn}>
            {props.children}
        </li>
    );
}

Item.propTypes = {
    children: React.PropTypes.any.isRequired
};

export default Item;