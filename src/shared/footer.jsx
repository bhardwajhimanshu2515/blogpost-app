import React from 'react';
import "./footer.css";
class Footer extends React.Component {
    render() {
        return (
            <div id="bottomBar">
                <div id="left" class="focus-in-expand-fwd">
                    All Rights Reserved By Himanshu Bhardwaj
                </div>
                <div id="right">
                    <a href="https://www.linkedin.com/in/mern-full-stack-developer/" class="fa fa-linkedin"></a>
                    <a href="https://github.com/bhardwajhimanshu2515" class="fa fa-github"></a>
                </div>
            </div>
        );
    }
}
export default Footer;