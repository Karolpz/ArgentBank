import React from 'react'
import Button, { BUTTON_TYPES } from '../Button/Button'

const Card = ({ title, amount, description }) => {
  return (
    <div className='transaction__card'>
        <div className="transaction__content">
    <div className="transaction__content--title">{title}</div>
    <div className="transaction__content--amount">{amount}</div>
    <div className="transaction__content--description">{description}</div>
        </div>
        <Button 
        type={BUTTON_TYPES.DEFAULT}
        text='View transactions'
        />
    </div>
  )
}

export default Card