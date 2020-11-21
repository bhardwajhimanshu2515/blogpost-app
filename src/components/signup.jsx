import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signupItem } from '../data/reducers/user.reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.userReducer).loggedIn;
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'himanshuImages');
        setLoading(true);

        const res = await fetch('https://api.cloudinary.com/v1_1/dse1vv6sd/image/upload',
            {
                method: 'POST',
                body: data
            })

        const file = await res.json()

        console.log(file);

        setImage(file.secure_url);
        setLoading(false);
        if (file.secure_url !== "") {
            toast.success("Signup Successful");
        }
        else {
            toast.error("Image Not Uploaded")
        }
    }
    const signupFunc = async (e) => {
        e.preventDefault();
        let payload = {
            img:image,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            password: password
        }
        try {
            let response = await dispatch(signupItem(payload));
            const userId = localStorage.getItem('userId');
        }
        catch (err) {
            console.log(err);
        }
    }
    if (loggedIn === true) {
        return <Redirect to="/create"></Redirect>
    }
    return (
        <div id="signup">
            <div class="slide-in-elliptic-right-fwd">
                Welcome to Signup Page
                </div><br />
            <div id="signupForm" class="scale-in-hor-center">
                <form>
                    {
                        loading ? (
                            <h3>Loading..............</h3>
                        )
                            : (
                                <img src={image} style={{ width: '125px', minHeight: '0px', marginBottom: "10px",borderRadius:"50%",maxHeight:"100px" }} />
                            )
                    }
                    <input type="file" name="file" placeholder="Upload an Image" onChange={uploadImage}></input>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
                    <input type="tel" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button class="bounce-in-top" type="submit" onClick={signupFunc}>Signup</button>
                        ........or........
                        <Link to="/Login" class="bounce-in-top">Login</Link>
                </form>
            </div>
        </div>
    );
}
export default Signup;