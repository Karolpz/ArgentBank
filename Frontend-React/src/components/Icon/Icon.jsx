import React from 'react'
import PropTypes from "prop-types";


const Icon = ({icon, title, text}) => {
  return (
    <div className="feature-item">
        <img src={icon} alt='Chat icon'className='feature-item__icon' />
        <h3 className='feature-item__title'>{title}</h3>
        <p className='feature-item__text'>{text}</p>
    </div>
  )
}

export default Icon

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}