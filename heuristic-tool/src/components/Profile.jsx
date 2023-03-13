import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Profile = (props) => {

  const navigate = useNavigate();
  
  const [userData, setUserData] = useState([]);

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
        setUserData((res.data.websites));
        console.log(userData);

        if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
        
    }catch (err){
      console.log(err);
      navigate('/login', { replace: true });
    }
  }

  // fetching results from db
    
  //

  //useEffect function is run first when we open a page 
  // here used to refresh page
  useEffect(() => {
    
      callProfilePage();
    
  }, [navigate]);

  // Replace the static score of 85% with the dynamic score obtained from the Google Form results


  return (
    <section>
      <form style={{paddingTop: "5%"}}>
      <div className="container text-center">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2">
      1 of 3
    </div>
    <div className="col-md-auto">
      {console.log(userData.name)}
    
      {userData.map((user, index) => (
    <div style={{paddingTop: "5%"}} key={index}>
      <h3>Website Name: {user.website}</h3>
      <div className="container">
      <h1 className="text-center"></h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="result-circle">
            <p className="score">Score: {user.result}</p>
          </div>
          <div className="result-text">
            
          </div>
        </div>
      </div>
    </div>
      
    </div>
  ))}
  
      
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