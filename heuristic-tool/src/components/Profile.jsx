import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Profile = () => {

  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({});

  const callProfilePage = async () => {
    try{
      // axios can also be used in place of fetch
      const res = await axios.get('/profile', 
        {
          headers: {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        withCredentials: true
        });
        console.log(JSON.stringify(res.data));
        setUserData((res.data));

        if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
        
    }catch (err){
      console.log(err);
      navigate('/login', { replace: true });
    }
  }


  //useEffect function is run first when we open a page 
  // here used to refresh page
  useEffect(() => {
    
      callProfilePage();
    
  }, []);

  return (
    <section>
      <form>
      <div className="container text-center">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2">
      1 of 3
    </div>
    <div className="col-md-auto">
      {console.log(userData.name)}
      <h5>{ userData.name }</h5>
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
      Variable width content
    </div>
    <div className="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
      </form>
    </section>
  )
}

export default Profile
