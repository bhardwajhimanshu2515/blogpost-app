import React,{useState} from "react";
import { Link, Redirect,Router } from "react-router-dom";
import "./login.css";

function Login(){
  const [emails,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const loginfunc=()=>{

  }
        return (
            <div id="login">
              <div class="slide-in-elliptic-right-fwd">Welcome to Login Page</div>
              <br />
              <div id="loginForm" class="scale-in-hor-center">
                <form>
                  <input
                    type="email"
                    name="emails"
                    value={emails}
                    placeholder="Email"
                    onChange={e=>
                      setEmail(e.target.value)}
                  ></input>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={e=>setPassword(e.target.value)}
                  ></input>
                  <button type="submit" id="loginButton" class="bounce-in-top" onClick={loginfunc}>
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