import React, { useEffect, useContext, useReducer } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../App"; 

const Logout = () => {
    
 //reducer
 const {state, dispatch} = useContext(UserContext);
 //

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/logout', {
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
              },
              withCredentials: true
        }).then((res) => {
            dispatch({type: "USER", payload: false})
            navigate('/login', { replace: true });
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
              }
        }).catch ((err) => {
            console.log(err);
        })
    },[navigate]);

  return (
    <div>
      <h1>Logout page</h1>
    </div>
  )
}

export default Logout
