import React from 'react'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'
import Card from '../../components/Card/Card'

const User = () => {
  return (
    <main className='user__content'>
      <div className='user__content--header'>
        <h1>Welcome back <br/>Tony Jarvis!</h1> {/*nom à changer selon le user*/}
        <Button
          type={BUTTON_TYPES.DEFAULT}
          text='Edit Name'
        />
        </div>
      <div className="transactions__list">
        <Card
          title='Argent Bank Checking (x8349)'
          amount='$2,082.79'
          description='Available Balance'
        />
        <Card
          title='Argent Bank Savings (x6712)'
          amount='$10,928.42'
          description='Available Balance'
        />
        <Card
          title='Argent Bank Credit Card (x8349)'
          amount='$184.30'
          description='Current Balance'
        />
      </div>


    </main>
  )
}

export default User