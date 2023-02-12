import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigation = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, company, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigation("/login", { replace: true });
    }
  };

  return (
    <>
      <section className="signup">
        <div className="signupcontainer mt-5">
          <form method="POST" className="signup-content">
            <div className="container" margin-top="10px">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  {" "}
                  <h2 className="form-title">Sign up</h2>
                  <br />
                  <div className="form-floating mb-3">
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingInput">
                      <span className="material-symbols-outlined">
                        drive_file_rename_outline
                      </span>{" "}
                      Your Name
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="Email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingEmail">
                      <span className="material-symbols-outlined">mail</span>{" "}
                      Email Address
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="phone"
                      name="phone"
                      className="form-control"
                      id="floatingPhone"
                      placeholder="Phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingPhone">
                      <span className="material-symbols-outlined">call</span>{" "}
                      Phone
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="company"
                      name="company"
                      className="form-control"
                      id="floatingCompany"
                      placeholder="Company"
                      autoComplete="off"
                      value={user.company}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingCompany">
                      <i className="material-symbols-outlined">apartment</i>{" "}
                      Company
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingPassword">
                      <span className="material-symbols-outlined">lock</span>{" "}
                      Password
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      name="cpassword"
                      className="form-control"
                      id="floatingcpassword"
                      placeholder="Password"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingcpassword">
                      <span className="material-symbols-outlined">lock</span>{" "}
                      Confirm Password
                    </label>
                  </div>
                  <button
                    type="button"
                    name="signup"
                    value="register"
                    onClick={PostData}
                    className="btnSignup"
                  >
                    Sign Up
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
                    <a href="/login">Login</a>
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

export default Signup;
