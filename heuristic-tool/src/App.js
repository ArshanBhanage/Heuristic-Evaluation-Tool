import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
//import App css
import "./App.css"
import "./Signup.css"
import "./Evaluator.css"
import "./Profile.css"
import "./Results.css"
import "./About.css"

//components
import Navbar from './components/Nav'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import Results from './components/Results'
import Evaluator from './components/Evaluator'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Logout from './components/Logout'
import OpenAiFeedback from './components/OpenAiFeedback'
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
    <Route path='/results' element={<Results/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/logout' element={<Logout/>} />
    <Route path='/openai' element={<OpenAiFeedback/>} />
    </Routes>
    </>
  )
}

export default App
