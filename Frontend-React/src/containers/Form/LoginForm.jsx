import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import Button, { BUTTON_TYPES } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/slices/loginSlice'
import { getUser } from '../../redux/slices/getUserSlice'

const LoginForm = () => {

    const { error, token } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ email: "", password: "" })
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()

    const handleChecked = () => {
        setRememberMe(!rememberMe)
    }
    const handleLogin = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser(userData))
    }

    useEffect(() => {
        if (token) {
            if (rememberMe) {
                localStorage.setItem('token', token)
            }
            dispatch(getUser(token))
            navigate('/user')
        }
    },[token])


    return (
        <form onSubmit={handleSubmit} className='form__content'>
            <Field
                type={FIELD_TYPES.TEXT}
                inputType='email'
                label='email'
                textlabel='Username'
                id='email'
                name='email'
                value={userData.email}
                onChange={handleLogin}
            />
            <Field
                type={FIELD_TYPES.TEXT}
                inputType='password'
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
                checked={rememberMe}
                onChange={handleChecked}
            />
            {error && <p className='message__error'>Identifiants incorrects</p>}
            <Button
                type={BUTTON_TYPES.SUBMIT}
                text='Sign In'
            />

        </form>
    )
}

export default LoginForm