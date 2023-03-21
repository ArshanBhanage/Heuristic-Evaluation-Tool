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

        if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
        
    }catch (err){
      console.log(err);
      navigate('/login', { replace: true });
    }
  }

  useEffect(() => {
    
      callProfilePage();
    
  }, [navigate]);

 const onSubmit = ((index) => {
    console.log(index);
    navigate('/results', { state: { prop1: index } , replace: true});
 });

  return (
    <section>
      <div className="container-profile">
        {userData.map((user, index) => (
          <div key={index} className="card-name-profile text-dark bg-light mb-3">
            <div className="card-body-r">
              <div className='row'>
                <div className='col' style={{ marginTop: '2%', marginBottom: '2%' }}>
                  <h4>Website Name: {user.website}</h4>
                  <h6>Website Url: {user.websiteUrl}</h6>
                </div>
              </div>
              <button className='btn btn-success' type="submit" onClick={() => onSubmit(index)}>View Result</button>
              <button className='btn btn-danger' type="submit">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Profile