import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends React.Component {
    render() {
        return (
            <div id="allContent">
                <div class="oneItem bounce-in-top">
                    <div class="imag">
                        <img src="https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg" width="100px" height="100px"></img>
                    </div>
                    <div class="info">
                        <div class="title">
                            AI: Artificial Intelligence
                        </div>
                        <div class="blog-btn-over bounce-in-bottom">
                            <button class="blog-read-btn btn ">Click To Read Blog</button>
                        </div>
                    </div>
                </div>
                <div class="oneItem bounce-in-top">
                    <div class="imag">
                        <img src="https://developer.apple.com/news/images/coreml-og.png" width="100px" height="100px"></img>
                    </div>
                    <div class="info">
                        <div class="title">
                            ML: Machine learning is the key to future.
                        </div>
                        <div class="blog-btn-over bounce-in-bottom">
                            <button class="blog-read-btn btn ">Click To Read Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;