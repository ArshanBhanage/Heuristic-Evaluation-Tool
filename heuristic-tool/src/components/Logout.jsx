import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/logout', {
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
              },
              withCredentials: true
        }).then((res) => {
            navigate('/logout', { replace: true });
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
