import React from "react";
import "./allBlogs.css";

function AllBlogs(props) {
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
                    <button class="blog-read-btn btn ">Click To Read Blog</button>
                </div>
            </div>
        </div>
    );
}

export default AllBlogs;