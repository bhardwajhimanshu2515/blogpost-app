import React from "react";
import "./allBlogs.css";
import { useDispatch, useSelector } from "react-redux";
import {getOneBlogItem} from "../data/reducers/blog.reducer";
import { Redirect } from "react-router";
import { useHistory,Link,NavLink } from "react-router-dom";
function AllBlogs(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const oneBlog=async(e,id)=>{
        e.preventDefault();
        let payload = id;
        console.log("id=",id);
        try {
            let response = await dispatch(getOneBlogItem(payload));
        }
        catch (err) {
            console.log(err);
        }
        let path = `one`; 
        history.push(path);
    }
    let blog= useSelector(state => state.todoReducer).oneBlog;
    console.log("blog=",blog);
    return (
        <div class="oneItem slide-in-elliptic-top-fwd">
            <div class="imag">
                <img src={props.image} width="100px" height="100px"></img>
            </div>
            <div class="info">
                <div class="title">
                    {props.title}
                        </div>
                <div class="blog-btn-over">
                    <NavLink to="/dashboard/one" class="blog-read-btn btn " onClick={(e)=>oneBlog(e,props.id)}>Click To Read Blog</NavLink>
                </div>
            </div>
        </div>
    );
}

export default AllBlogs;