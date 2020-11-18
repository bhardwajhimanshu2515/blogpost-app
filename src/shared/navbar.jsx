import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {loginItem  } from '../data/reducers/user.reducer';

function Navbar() {
    const loggedIn=useSelector(state => state.userReducer).loggedIn;
    const userImg=localStorage.getItem('userImage');
    console.log("userimg=",userImg);
    if(loggedIn===true){
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <Link to="/dashboard/read">All Blogs</Link>
                    <Link to="/dashboard/read/yours">Your Blogs</Link>
                    <Link to="/create">Write</Link>
                    <Link to="/about"><img src={userImg} style={{ width: '50px', minHeight: '0px',borderRadius:"50%",maxHeight:"50px" }}></img></Link>
                </div>
            </div>
        );
    }
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        );
    }

export default Navbar;