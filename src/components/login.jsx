import React,{useState} from "react";
import { Link, Redirect,Router } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginItem } from "../../src/data/reducers/user.reducer";
import { ToastContainer, toast } from 'react-toastify';

function Login(){
  const [emails,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userReducer).userInfo;
  const loggedIn=useSelector(state => state.userReducer).loggedIn;
  const loginfunc=async (e)=>{
    e.preventDefault();
    let payload={
      email:emails,
      password:password
    }
    try{
      let response=await dispatch(loginItem(payload));
      const userId = localStorage.getItem('userId');
      toast.success("Login Successful")
    }
    catch(err){
      console.log(err);
      toast.error("Login Failed");
    }
  }
  if(loggedIn===true){
    return <Redirect to="/create"></Redirect>
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
              <ToastContainer/>
            </div>
          );
    };

export default Login;