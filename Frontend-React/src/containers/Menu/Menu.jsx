import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'
import { NavItem } from '../../components/NavItem/NavItem'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const location = useLocation();
  const isUserRoute = location.pathname === '/user';

  return (
    <header className='menu'>
      <NavLink to ='/'>
      <img src={logo} alt='Logo du site ArgentBank' className='menu__logo' />
      </NavLink>
      <nav className='menu__nav'>
        {!isUserRoute ?
          (<NavLink to='signin'>
            <NavItem
              icon={faCircleUser}
              text="Sign In"
            />
          </NavLink>) :
          <>
            <NavItem
              icon={faCircleUser}
              text='Tony' //changez en fonction du username
            />
            <NavItem
              icon={faRightFromBracket}
              text='Sign Out'
            />
          </>

        }
      </nav>
    </header>
  )
}

export default Menu