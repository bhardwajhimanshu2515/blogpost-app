import React from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {loginItem  } from '../data/reducers/user.reducer';

function Navbar() {
    const loggedIn=useSelector(state => state.userReducer).loggedIn;
    if(loggedIn===true){
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard/read">Dashboard</Link>
                    <Link to="/login">Logout</Link>
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