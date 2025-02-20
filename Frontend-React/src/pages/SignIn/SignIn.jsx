import React from 'react'
import LoginForm from '../../containers/Form/LoginForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
  return (
      <main className='form'>
        <section className="form__modal">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <LoginForm />
        </section>
      </main>
  )
}

export default SignIn