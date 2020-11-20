import React from "react";
import "./profile.css";
import { NavLink, Redirect } from "react-router-dom";
import { logoutFunction } from "../data/reducers/user.reducer";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
    const userImg = localStorage.getItem('userImage');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const number = localStorage.getItem('userNumber');
    console.log("name=", name);
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.userReducer).loggedIn;
    const logout = async (e) => {
        e.preventDefault();
        let response = await dispatch(logoutFunction());
        console.log("response of logout=", response);
    }
    if (loggedIn === false) {
        return <Redirect to="/"></Redirect>
    }
    return (
        <div id="profile">
            <div id="profImg">
                <img src={userImg} style={{ width: '200px', minHeight: '0px', marginBottom: "10px", borderRadius: "50%", maxHeight: "175px", marginTop: "20px" }} />
            </div>
            <div id="profName">
                {name}
            </div>
            <div id="profEmail">
                {email}
            </div>
            <div id="profileNumber">
                {number}
            </div>
            <NavLink exact to="/login" onClick={logout}>Logout</NavLink>
        </div>
    );
}

export default Profile;