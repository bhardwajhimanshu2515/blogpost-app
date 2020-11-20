import React from "react";
import "./about.css";

function About(){
    return(
        <div id="about">
            <div className="developer">
                <div className="nameDev">
                    Himanshu Bhardwaj
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                </div>
            </div>
            <div className="developer">
                <div className="nameDev">
                    Shubhangi Khare
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                </div>
            </div>
            <div className="developer">
                <div className="nameDev">
                    Mohit Sharma
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                </div>
            </div>
            <div className="developer">
                <div className="nameDev">
                    Tarun Choudhary
                </div>
                <div className="descDev">
                    React JS Developer
                </div>
                <div className="linksDev">
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
}

export default About;