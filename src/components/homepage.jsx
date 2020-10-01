import React from 'react';
import "./homepage.css";
class Homepage extends React.Component {
    render() {
        return (
            <div id="container">
                    <div id="items">
                        <div class="single slide-in-elliptic-top-fwd">
                            <div class="question">
                                <img src="grunge-2667529_1920.jpg" width="100%" height="100%"></img>
                            </div>
                            <div class="answer">
                                <h1>Write Blogs Here............</h1>
                                Here you can write Blogs any time and let others to see what you have written.
                                There is no-one who will stop you, its upto you how much you want to write.
                            </div>
                        </div>
                        <div class="single slide-in-elliptic-top-fwd">
                            <div class="question">
                                <img src="background-1771068_1920.jpg" width="100%" height="100%"></img>
                            </div>
                            <div class="answer">
                                <h1>Read Others' Blogs............</h1>
                                Here you can read blogs of other people too.
                                You can enjoy it while having coffe and fill cup of your knowledge.
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Homepage;