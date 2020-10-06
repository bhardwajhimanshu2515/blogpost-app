import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Redirect,Router } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../context/auth-context";

const Login = (props) => {
  const auth = useContext(AuthContext);

  const [state, setState] = useState({
    email: "",
    password: "",
    user: [],
  });

  const handleChange = (e) => {
    console.log(state);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    const { email, password } = state;
    const rawurl = "http://localhost:5000/api/user/login";
    const url = rawurl;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    e.preventDefault();
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        auth.login(data.token);
      })
      .catch((error) => console.log("error", error));
    //    Router.browserHistory.push('/')
    };

  
  const { email, password } = state;
  return (
    <div id="login">
      <div class="slide-in-elliptic-right-fwd">Welcome to Login Page</div>
      <br />
      <div id="loginForm" class="scale-in-hor-center">
        <form>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <button onClick={login} id="loginButton" class="bounce-in-top">
            Login
          </button>
          ........or........
          <Link to="/signup" class="bounce-in-top">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
