import React from 'react';
import {Link, Redirect} from "react-router-dom";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            token:"",
            user:[],
            loggedIn:false
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {

    }
    login = (e) => {
        const {email,password}=this.state;
        const rawurl = 'http://localhost:5000/api/user/login';
        const url = rawurl;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:email,password:password })
        };
        e.preventDefault();
            fetch(url,requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ user: [data], loaded: true });
                    localStorage.setItem('userData',JSON.stringify(this.state.user));
                    localStorage.setItem('token',JSON.stringify(this.state.user[0].token))
                    this.setState({token:localStorage.getItem('token')})
                    console.log(localStorage.getItem('userData'));
                    this.setState({loggedIn:true});
                })
                .catch(err => console.log("error ", err))

    }
    render() {
        if(this.state.loggedIn==true){
            return <Redirect to="/dashboard/read"></Redirect>
        } 
        return (
            <div id="login">
                <div class="slide-in-elliptic-right-fwd">
                    Welcome to Login Page
                </div><br/>
                <div id="loginForm" class="scale-in-hor-center">
                    <form>
                        <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}></input>
                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}></input>
                        <button onClick={this.login} id="loginButton" class="bounce-in-top">Login</button>
                        ........or........
                       <Link to="/signup" class="bounce-in-top">Signup</Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;