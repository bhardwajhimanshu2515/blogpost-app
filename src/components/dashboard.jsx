import React from "react";
import {Link} from "react-router-dom";
import "./dashboard.css";

class Dashboard extends React.Component {
    render() {
        return (
            <div id="allContent">
                <div class="oneItem swing-in-top-fwd">
                    <div class="imag">
                        <img src="https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg" width="100px" height="100px"></img>
                    </div>
                    <div class="title">
                        AI
                    </div>
                    <div class="description">
                        Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.
                    </div>
                    <div class="by">
                    Writer: Himanshu Bhardwaj
                    </div>
                </div>
                <div class="oneItem swing-in-top-fwd">
                    <div class="imag">
                        <img src="https://www.europeanbusinessreview.com/wp-content/uploads/2018/08/iStock-871793122.jpg" width="100px" height="100px"></img>
                    </div>
                    <div class="title">
                        ML
                    </div>
                    <div class="description">
                    Machine learning involves computers discovering how they can perform tasks without being explicitly programmed to do so. It involves computers learning from data provided so that they carry out certain tasks. For simple tasks assigned to computers, it is possible to program algorithms telling the machine how to execute all steps required to solve the problem at hand; on the computer's part, no learning is needed. For more advanced tasks, it can be challenging for a human to manually create the needed algorithms. In practice, it can turn out to be more effective to help the machine develop its own algorithm, rather than having human programmers specify every needed step.
                    </div>
                    <div class="by">
                    Writer: Himanshu Bhardwaj
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;