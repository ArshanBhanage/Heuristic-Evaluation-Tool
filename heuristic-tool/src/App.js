import React, { useReducer, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
//import App css
import "./App.css"
import "./Signup.css"
import "./Evaluator.css"
import "./Profile.css"
import "./Results.css"
import "./About.css"
import "./Backtotop.css"

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
import Backtotop from './components/Backtotop'
import Loading from './components/Loading'
//components

import { Routes, Route } from 'react-router-dom';
import {initialState, reducer} from "../src/reducer/UseReducer";


import backgroundImage from './images/moroccan-flower.png';

const backgroundStyle = {
  backgroundColor: "#ffffff",
  opacity: 1,
  backgroundImage: "radial-gradient(#d6677f 1.3px, transparent 1.3px), radial-gradient(#d6677f 1.3px, #ffffff 1.3px)",
  backgroundSize: "52px 52px",
  backgroundPosition: "0 0, 26px 26px",
  height: "100%",
  width: "100%",
};


const bodyStyle = {
  height: "100%",
};

export const UserContext = createContext();

const Routing = () => {
  return(
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
    <Route path='/openai' element={<Backtotop/>} />
    </Routes>
  );
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div style={backgroundStyle}>
    <UserContext.Provider value = {{state, dispatch}}>
    <Navbar/>
    <div style={bodyStyle}>
      <Routing/>
    </div>
    </UserContext.Provider>
    </div>
    </>
  )
}

export default App
