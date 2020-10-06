import React from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";
import "./navbar.css";
import {AuthContext} from '../context/auth-context'
function Navbar() {
    const auth = useContext(AuthContext);
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                
                  {
                    (auth.isLoggedIn || !auth.isLoggedIn) && <Link to="/about">About</Link>
                }
                 
                 {
                    !auth.isLoggedIn && <Link to="/login">Login</Link>

                 }
                {
                    !auth.isLoggedIn && <Link to="/signup">Signup</Link>
                }
                {
                    auth.isLoggedIn && <Link to="/dashboard/read">Dashboard</Link>
                }
                {
                    auth.isLoggedIn && <Link to="/" onClick={auth.logout}>Logout</Link>
                }
                </div>
            </div>
        );
    }

export default Navbar;