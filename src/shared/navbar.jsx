import React from 'react';
import "./navbar.css";
class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <div class="tracking-in-contract-bck">
                    Blogs4You
                </div>
                <div id="navLinks">
                    <a href="#">Login</a>
                    ||or||
                    <a href="#0">Signup</a>
                </div>
            </div>
        );
    }
}
export default Navbar;