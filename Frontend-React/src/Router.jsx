import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignIn from './pages/Signin/Signin';
import User from './pages/User/User';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='user' element={<User />} />
    </Routes>
  )
}

export default Router