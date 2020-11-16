import React,{useState} from "react";
import { Link,Redirect } from "react-router-dom";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signupItem  } from '../data/reducers/user.reducer';

function Signup(){
    const dispatch = useDispatch();
    const loggedIn=useSelector(state => state.userReducer).loggedIn;
    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signupFunc=async(e)=>{
        e.preventDefault();
        let payload={
            name:name,
            phoneNumber:phoneNumber,
            email:email,
            password:password
        }
        try{
            let response=await dispatch(signupItem(payload));
            const userId = localStorage.getItem('userId');
            console.log("typeof=",typeof userId);
        console.log("userId=",userId);
          }
          catch(err){
            console.log(err);
          }
    }
    if(loggedIn===true){
        return <Redirect to="/create"></Redirect>
      }
        return (
            <div id="signup">
                <div class="slide-in-elliptic-right-fwd">
                    Welcome to Signup Page
                </div><br/>
                <div id="signupForm" class="scale-in-hor-center">
                    <form>
                        <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name"/>
                        <input type="tel" name="phoneNumber" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
                        <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
                        <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                        <button class="bounce-in-top" type="submit" onClick={signupFunc}>Signup</button>
                        ........or........
                        <Link to="/Login" class="bounce-in-top">Login</Link>
                    </form>
                </div>
            </div>
        );
}
export default Signup;