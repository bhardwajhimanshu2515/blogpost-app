import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

class Signup extends React.Component {
    render() {
        return (
            <div id="signup">
                <div class="slide-in-elliptic-right-fwd">
                    Welcome to Signup Page
                </div><br/>
                <div id="signupForm" class="scale-in-hor-center">
                    <form>
                        <input type="text" placeholder="Full Name"/>
                        <input type="tel" placeholder="Phone Number"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button class="bounce-in-top">Signup</button>
                        ........or........
                        <Link to="/Login" class="bounce-in-top">Login</Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default Signup;