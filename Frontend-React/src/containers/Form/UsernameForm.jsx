import React, { useState } from 'react'
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsername } from '../../redux/slices/newUsernameSlice'

const UsernameForm = ({ toggleEditName }) => {

    const { token } = useSelector(state => state.login)
    const { userNameUser, firstNameUser, lastNameUser } = useSelector(state => state.getUser)
    const [editName, setEditName] = useState({ userName: '' })
    const dispatch = useDispatch()

    const handleEditName = (event) => {
        const { name, value } = event.target;
        setEditName(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(changeUsername({ newUsername: editName.userName, token }))
        toggleEditName()
    }

    return (
        <form onSubmit={handleSubmit} className='usernameForm__content'>
            <Field
                type={FIELD_TYPES.DEFAULT}
                inputType='text'
                label='User name'
                textlabel='User name:'
                id='User name'
                placeholder={userNameUser}
                name='userName'
                value={editName.userName}
                onChange={handleEditName}
            />
            <Field
                type={FIELD_TYPES.DEFAULT}
                inputType='text'
                label='First name'
                textlabel='First name:'
                id='First name'
                disabled={true}
                placeholder={firstNameUser}
            />
            <Field
                type={FIELD_TYPES.DEFAULT}
                inputType='text'
                label='Last name'
                textlabel='Last name:'
                id='Last name'
                disabled={true}
                placeholder={lastNameUser}
            />
            <div className="usernameForm__content--buttons">
                <Button
                    type={BUTTON_TYPES.SUBMIT}
                    text='Save'
                />
                <Button
                    type={BUTTON_TYPES.DEFAULT}
                    text='Cancel'
                    onClick={toggleEditName}
                />
            </div>
        </form>
    )
}

export default UsernameForm