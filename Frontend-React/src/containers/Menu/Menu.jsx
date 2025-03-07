import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../public/img/argentBankLogo.webp'
import NavItem from '../../components/NavItem/NavItem'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/loginSlice'


const Menu = () => {

  const { token } = useSelector(state => state.login)
  const { userNameUser } = useSelector(state => state.getUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className='menu'>
      <NavLink to='/'>
        <img src={logo} alt='Logo du site ArgentBank' className='menu__logo' />
      </NavLink>
      <nav className='menu__nav'>
        {token ?
          (
            <>
              <NavLink to='/user'>
                <NavItem
                  icon={faCircleUser}
                  text={userNameUser}
                />
              </NavLink>
              <NavItem
                icon={faRightFromBracket}
                text='Sign Out'
                onClick={handleLogout}
              />
            </>
          ) :
          <NavLink to='/signin'>
            <NavItem
              icon={faCircleUser}
              text={"Sign in"}
            />
          </NavLink>
        }
      </nav>
    </header>
  )
}

export default Menu