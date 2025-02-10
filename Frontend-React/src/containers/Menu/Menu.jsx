import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'
import { NavItem } from '../../components/NavItem/NavItem'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <header className='menu'>
      <img src={logo} alt='Logo du site ArgentBank' className='menu__logo' />
      <nav className='menu__nav'>
        <NavLink to='signin'>
          <NavItem
            icon={faCircleUser}
            text="Sign In"
          />
        </NavLink>
      </nav>
    </header>
  )
}

export default Menu