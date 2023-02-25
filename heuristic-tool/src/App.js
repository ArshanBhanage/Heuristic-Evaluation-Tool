import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
//import App css
import "./App.css"
import "./Signup.css"
import "./Evaluator.css"
import "./Profile.css"

//components
import Navbar from './components/Nav'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import Evaluator from './components/Evaluator'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Logout from './components/Logout'
//components

import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/tool' element={<Evaluator/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/logout' element={<Logout/>} />
    </Routes>
    </>
  )
}

export default App
