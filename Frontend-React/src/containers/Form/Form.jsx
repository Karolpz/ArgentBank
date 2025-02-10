import React from 'react'
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'

const Form = () => {
    return (
        <form className='form__content'>
            <Field
                type={FIELD_TYPES.TEXT}
                label='username'
                textlabel='Username'
                id='username'
            />
            <Field
                type={FIELD_TYPES.PASSWORD}
                label='password'
                textlabel='Password'
                id='password'
            />
            <Field
                type={FIELD_TYPES.CHECKBOX}
                label='remember-me'
                textlabel='Remember me'
            />
            <Button
                type={BUTTON_TYPES.SUBMIT}
                text='Sign In'
            />
        </form>
    )
}

export default Form