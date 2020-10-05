import React,{useState,useEffect} from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import {Link, Redirect} from "react-router-dom";
import "./login.css";
import {AuthContext} from '../context/auth-context'

const Login = ()=>{
    const auth = useContext(AuthContext)
    
    const[ state,setState] =useState({
            email:"",
            password:"",
            user:[],
        });
    
  const  handleChange = (e) => {
      console.log(state);
        setState({...state, [e.target.name]: e.target.value});
    };

    
    const login = (e) => {
        const {email,password}=state;
        const rawurl = 'http://localhost:5000/api/user/login';
        const url = rawurl;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:email,password:password })
        };
        e.preventDefault();
           const responseData =  fetch(url,requestOptions)
                 .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setState({ user: [data], loaded: true });
                    localStorage.setItem('userData',JSON.stringify(state.user));
                    localStorage.setItem('token',JSON.stringify(state.user[0].token))
                    setState({token:localStorage.getItem('token')})
                    console.log(localStorage.getItem('userData'));
                    setState({loggedIn:true});
                })
                // console.log(data=>console.log(response.data);)
                auth.login(responseData.user, responseData.token)
                // .catch(err => console.log("error ", err))

    }

        // useEffect(() => {
        //     return (
        //         auth.isLoggedIn && <Redirect to="/dashboard/read" />
        // )})
        const {email,password} = state;
        return (
            <div id="login">
                <div class="slide-in-elliptic-right-fwd">
                    Welcome to Login Page
                </div><br/>
                <div id="loginForm" class="scale-in-hor-center">
                    <form>
                        <input type="email" name="email" value={email} placeholder="Email" onChange={handleChange}></input>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange}></input>
                        <button onClick={login} id="loginButton" class="bounce-in-top">Login</button>
                        ........or........
                       <Link to="/signup" class="bounce-in-top">Signup</Link>
                    </form>
                </div>
            </div>
        );
    }

export default Login;