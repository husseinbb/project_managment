import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailErro] = useState("");
  const [passwordErr, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var error = [];
    if (name === "") {
      setNameError("Name can not be empty.");
      error.push("Email error");
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailErro("Email can not be empty.");
      error.push("Email error");
    } else {
      setEmailErro("");
    }

    if (password === "") {
      setPasswordError("Password can not be empty.");
      error.push("Password error");
    } else {
      setPasswordError("");
    }

    if (error.length > 0) {
      return;
    }
    const payload = {
      name,
      email,
      password,
      password,
      password_confirmation: password,
    };

    //axios.defaults.withCredentials = true;
    axios.get(`/sanctum/csrf-cookie`).then((response) => {
      console.log(response);
      axios.post("/register", payload).then((res) => {
        console.log(res.data);
        window.localStorage.setItem("loggedIn", true);
        history.push("/dashboard");
      });
    });
  };
  return (
    <div className="contain" id="register">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <h1 className="form-title text-frozen">Registration Form</h1>
        </div>
        <div className="form-group">
          <form id="loginform" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <p>{nameError}</p>

            <label>Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>{emailError}</p>

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

export default Register;
