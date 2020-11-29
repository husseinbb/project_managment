import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var error = [];
    if (email === "") {
      setEmailErr("Email can not be empty.");
      error.push("Email error");
    } else {
      setEmailErr("");
    }

    if (password === "") {
      setPasswordErr("Password can not be empty.");
      error.push("Password error");
    } else {
      setPasswordErr("");
    }

    if (error.length > 0) {
      return;
    }
    const payload = {
      email: email,
      password: password,
    };

    //axios.defaults.withCredentials = true;
    axios.get("/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios.post("/login", payload).then((res) => {
        console.log("logged in ", res);
        window.localStorage.setItem("loggedIn", true);
        history.push("/dashboard");
      });
    });
  };

  return (
    <div className="contain" id="login">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <h1 className="form-title text-frozen">Login Form</h1>
        </div>
        <div className="form-group">
          <form id="loginform" onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>{emailErr}</p>

            <br />

            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>{passwordErr}</p>

            <div className="form-actions">
              <input type="submit" value="submit" className="submit" />

              <Link to="/" className="back">
                Back To Menu
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
