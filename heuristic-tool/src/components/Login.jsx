import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  
  const loginUser = async (e) => {
    e.preventDefault();

    const res  = await fetch('/login', { 
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email, password
      })
     });

     const data = res.json();
     
     if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
     }else{
      window.alert("Login Success");
      navigate('/' , { replace: true });
     }
  }

  return (
    <>
      <section className="login">
        <div className="signupcontainer mt-5">
          <form method="POST" className="signup-content">
            <div className="container" margin-top="10px">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  {" "}
                  <h2 className="form-title">Log In</h2>
                  <br />
                  <div className="form-floating">
                    <input
                      type="email"
                      name = "email"
                      className="form-control"
                      id="floatingEmail"
                      value={email}
                      onChange={ (e) => setEmail(e.target.value) }
                      placeholder="Email"
                    />
                    <label htmlFor="floatingEmail">
                      <span className="material-symbols-outlined">mail</span>{" "}
                      Email Address
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="floatingPassword"
                      value={password}
                      onChange={ (e) => setPassword(e.target.value) }
                      placeholder="Password"
                      autoComplete="off"
                    />
                    <label htmlFor="floatingPassword">
                      <span className="material-symbols-outlined">lock</span>{" "}
                      Password
                    </label>
                  </div>
                  <button onClick={loginUser} type="button" className="btnSignup">
                    Login
                  </button>
                </div>
                <div
                  className="col-sm-5 offset-sm-2 col-md-6 offset-md-0"
                  padding="auto"
                >
                  <br />
                  <br />
                  <br />
                  <img
                    src={require("../images/ui-lift1.png")}
                    height="50%"
                    alt=""
                  />
                  <br />
                  <br />
                  Already have an account?
                  <div className="container">
                    {" "}
                    <a href="/register">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
