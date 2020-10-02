import React from 'react';
import {Link} from "react-router-dom";
import "./login.css";

class Login extends React.Component {
    render() {
        return (
            <div id="container">
                <div class="slide-in-elliptic-right-fwd">
                    Welcome to Login Page
                </div><br/>
                <div id="loginForm" class="scale-in-hor-center">
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>Login</button>
                        ........or........
                       <Link to="/signup">Signup</Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;