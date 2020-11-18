import React from "react";
import "./oneBlog.css";
import { useDispatch, useSelector } from "react-redux";

function OneBlog(){
    let blog= useSelector(state => state.todoReducer).oneBlog;
    return(
        <div id="oneBlog1">
            <div id="title1">
                {blog[0].title}
            </div>
            <div id="img1">
                <img src={blog[0].img} width="100%" height="100%"></img>
            </div>
            <div id="description1">
                <p>{blog[0].description}</p>
            </div>
        </div>
    );
}

export default OneBlog;