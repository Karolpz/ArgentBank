import React, { useState } from 'react'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { useSelector } from 'react-redux'
import UsernameForm from '../../containers/Form/usernameForm'

const User = () => {

  const { firstNameUser, lastNameUser } = useSelector(state => state.getUser)
  const [editName, setEditName] = useState(false)

  const toggleEditName = () => {
    setEditName(!editName)
  }

  return (
    <main className='user__content'>
      <div className='user__content--header'>
        {editName ?
          <>
            (<h1>Edit user info</h1>
            <UsernameForm toggleEditName={toggleEditName} />)
          </> :
          <>
            (<h1>Welcome back <br />{firstNameUser} {lastNameUser}!</h1>
            <Button
              type={BUTTON_TYPES.DEFAULT}
              text='Edit Name'
              onClick={toggleEditName}
            />)
          </>
        }
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