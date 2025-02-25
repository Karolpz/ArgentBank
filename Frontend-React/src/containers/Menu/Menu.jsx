import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'
import NavItem from '../../components/NavItem/NavItem'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/loginSlice'


const Menu = () => {

  const { token } = useSelector(state => state.login)
  const { userNameUser } = useSelector(state => state.getUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleUser = () => {
    navigate('/user')
  }
//Utiliser NavLink ou useNavigate ?
  return (
    <header className='menu'>
      <NavLink to='/'>
        <img src={logo} alt='Logo du site ArgentBank' className='menu__logo' />
      </NavLink>
      <nav className='menu__nav'>
        {token ?
          (
            <>
              <NavItem
                icon={faCircleUser}
                text={userNameUser}
                onClick={handleUser}
              />
              <NavItem
                icon={faRightFromBracket}
                text='Sign Out'
                onClick={handleLogout}
              />
            </>
          ) :
          <NavItem
            icon={faCircleUser}
            text={"Sign in"}
            onClick={handleLogin}
          />
        }
      </nav>
    </header>
  )
}

export default Menu