import React from "react";
import { useState } from "react";
import "./createBlog.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBlogItem } from '../data/reducers/blog.reducer';
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();
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
            toast.success("Image Uploaded");
        }
        else {
            toast.error("Image Not Uploaded")
        }
    }
    const createFunc =async (e) => {
        e.preventDefault();
        let payload={
            title:title,
            description:description,
            img:image,
            ownerId:userId,
        }
        try{
            let response=await dispatch(createBlogItem(payload));
          }
          catch(err){
            console.log(err);
          }
    }
    const loggedIn=useSelector(state => state.userReducer).loggedIn;
      if(loggedIn===false){
          return <Redirect to="/"></Redirect>
      }
    return (
        <div id="createBlog">
            <div class="slide-in-elliptic-right-fwd">
                Write Your Blog.........
                </div><br />
            <div id="blogForm" class="scale-in-hor-center">
                <form>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title of Your Blog" />
                    <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Content"></textarea>
                    {
                        loading ? (
                            <h3>Loading..............</h3>
                        )
                            : (
                                <img src={image} style={{ width: '100%',minHeight:'0px',marginBottom:"10px" }} />
                            )
                    }
                    <input type="file" name="file" placeholder="Upload an Image" onChange={uploadImage}></input>
                    <button class="bounce-in-top" type="submit" onClick={createFunc}>Create</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreateBlog;