import React from 'react';
import "./login.css";

class Login extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="loginForm" class="scale-in-hor-center">
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>Login</button>
                        ........or........
                       <a href="#">Signup</a>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;