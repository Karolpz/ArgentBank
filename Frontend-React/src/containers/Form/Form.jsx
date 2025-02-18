import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/slices/loginSlice';

const Form = () => {

    const { status, error } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    console.log(status);
    console.log(error);
    
    
    const handleLogin = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({ ...prevState, [name]: value }))  
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser(userData))
    }

    useEffect(() => {
        if (status === 'succeeded') {
            navigate('/user')
        }
    }, [status, error])

    return (
        <form onSubmit={handleSubmit} className='form__content'>
            <Field
                type={FIELD_TYPES.TEXT}
                label='email'
                textlabel='Username'
                id='email'
                name='email'
                value={userData.email}
                onChange={handleLogin}
            />
            <Field
                type={FIELD_TYPES.PASSWORD}
                label='password'
                textlabel='Password'
                id='password'
                name='password'
                value={userData.password}
                onChange={handleLogin}
            />
            <Field
                type={FIELD_TYPES.CHECKBOX}
                label='remember-me'
                textlabel='Remember me'
            />
             {error && <p className='message__error'>Identifiants incorrects</p>}
                <Button
                    type={BUTTON_TYPES.SUBMIT}
                    text='Sign In'
                />
          
        </form>
    )
}

export default Form