import React from "react";
import "./profile.css";

function Profile(){
    const userImg=localStorage.getItem('userImage');
    const name=localStorage.getItem('userName');
    const email=localStorage.getItem('userEmail');
    const number=localStorage.getItem('userNumber');
    console.log("name=",name);
    return(
        <div id="profile">
            <div id="profImg">
                <img src={userImg} style={{ width: '200px', minHeight: '0px', marginBottom: "10px",borderRadius:"50%",maxHeight:"175px",marginTop:"20px" }}/>
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
        </div>
    );
}

export default Profile;