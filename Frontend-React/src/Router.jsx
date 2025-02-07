import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import User from './pages/User/User';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='user' element={<User />} />
    </Routes>
  )
}

export default Router