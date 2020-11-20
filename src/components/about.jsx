import React from "react";
import "./about.css";
import Himanshu from "../assets/images/himanshuPIC1.jpg";
import Shubhangi from "../assets/images/1.jpg"
import Mohit from "../assets/images/1539013345138.jpg";
import Tarun from "../assets/images/1598120667945.jpg";

function About() {
    return (
        <div id="about">
            <div className="developer">
                <div className="imgDev">
                    <img src={Himanshu} ></img>
                </div>
                <div className="nameDev">
                    Himanshu Bhardwaj
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                    <a href="https://github.com/bhardwajhimanshu2515"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mern-full-stack-developer/"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div className="developer">
                <div className="imgDev">
                    <img src={Shubhangi}></img>
                </div>
                <div className="nameDev">
                    Shubhangi Khare
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                    <a href="https://github.com/shubhangi4488"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shubhangi-khare-9122a4167/"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div className="developer">
                <div className="imgDev">
                    <img src={Mohit}></img>
                </div>
                <div className="nameDev">
                    Mohit Sharma
                </div>
                <div className="descDev">
                    MERN Full Stack Developer
                </div>
                <div className="linksDev">
                    <a href="https://github.com/themohitgaur"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mohit-sharma-478603115/"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div className="developer">
                <div className="imgDev">
                    <img src={Tarun} ></img>
                </div>
                <div className="nameDev">
                    Tarun Choudhary
                </div>
                <div className="descDev">
                    React JS Developer
                </div>
                <div className="linksDev">
                    <a href="https://github.com/tarunchoudhary1805"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tarunchoudhary1805/"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}

export default About;