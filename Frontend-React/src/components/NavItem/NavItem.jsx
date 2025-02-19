import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

const NavItem = ({icon, text, onClick}) => {
    return (
        <div className='navItem' onClick={onClick}>
            <div className="navItem__icon">
                <FontAwesomeIcon icon = {icon} />
            </div>
            <p className="navItem__text">
                {text}
            </p>
        </div>
    )
}

export default NavItem

NavItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
}