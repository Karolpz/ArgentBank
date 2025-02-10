import React from 'react'
import Menu from '../../containers/Menu/Menu'
import Form from '../../containers/Form/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
  return (
    <>
      <Menu />
      <main className='form'>
        <section className="form__modal">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </>
  )
}

export default SignIn