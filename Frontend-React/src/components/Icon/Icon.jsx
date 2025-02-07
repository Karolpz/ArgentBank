import React from 'react'


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