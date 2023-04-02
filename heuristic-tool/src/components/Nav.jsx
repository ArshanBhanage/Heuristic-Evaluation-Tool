import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

import { UserContext } from "../App"; 

const Nav = () => {

 //reducer
 const {state, dispatch} = useContext(UserContext);
 //

const RenderMenu = () => {
  if(state){
    return(
<>
<li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                <span className="font-link" style={{ fontWeight: 'bold' }}>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Contact</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/tool">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Evaluator Tool</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Profile</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/logout">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Logout</span>
                </NavLink>
              </li>
</>
    );
  }else{
    return(
      <>
      <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                <span className="font-link" style={{ fontWeight: 'bold' }}>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Contact</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/register">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Sign Up</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Log In</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/tool">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Evaluator Tool</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                <span className="font-link" style={{ fontWeight: 'bold' }}>Profile</span>
                </NavLink>
              </li>
              
      </>
    );
  }
}

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-back">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={require('../images/ui-lift1.png')} height='60' alt="" />
                    </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
