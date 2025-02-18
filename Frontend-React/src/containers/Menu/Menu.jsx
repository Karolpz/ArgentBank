import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'
import NavItem from '../../components/NavItem/NavItem'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/loginSlice'

const Menu = () => {

  const location = useLocation();
  const isUserRoute = location.pathname === '/user';
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className='menu'>
      <NavLink to='/'>
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
            <div onClick={handleLogout} className='logout__button'>
              <NavItem
                icon={faRightFromBracket}
                text='Sign Out'
              />
            </div>
          </>

        }
      </nav>
    </header>
  )
}

export default Menu