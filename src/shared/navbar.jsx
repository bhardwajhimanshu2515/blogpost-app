import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <Link to="/login">Login</Link>
                    ||or||
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        );
    }
}
export default Navbar;