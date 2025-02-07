import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavItem = ({icon, text}) => {
    return (
        <div className='navItem'>
            <div className="navItem__icon">
                <FontAwesomeIcon icon = {icon} />
            </div>
            <p className="navItem__text">
                {text}
            </p>
        </div>
    )
}
