import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import SignIn from './pages/Signin/Signin';
import User from './pages/User/User';
import { useSelector } from 'react-redux';

const Router = () => {

  const { token } = useSelector(state => state.login)

  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/user' element={token ? <User /> : <Navigate to='/signin' /> } />
    </Routes>
  )
}

export default Router