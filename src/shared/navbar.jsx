import React from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";
import "./navbar.css";
function Navbar() {
    const { user } = useContext(UserContext);
    if(user!=null){
        return(
            <div id="navbar">
            <div class="tracking-in-contract-bck">
                Blogs4You
            </div>
            <div id="navLinks">
                <Link to="/about">About</Link>
                ||
                <Link to="/">Logout</Link>
            </div>
        </div> 
        );
    }
    else{
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <Link to="/about">About</Link>
                    ||
                    <Link to="/login">Login</Link>
                    ||or||
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        );
    }
}
export default Navbar;