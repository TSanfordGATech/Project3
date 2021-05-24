import React, { Component } from 'react'
import logo from "../../teamlogo.png"

class UserScoreCard extends Component {

    componentDidMount() {
        console.log("UserScoreCard mounted");
        const M = window.M;
        // document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        // });
    };

    render() {
        return (
            <div className="score-box">

            <ul id="slide-out" className="sidenav">
                <div className="user-view">
                    <div>
                    <img src={logo} alt="logo"/>
                    </div>
                    <div>
<li>
                    <h3 className="mission1"> <strong>Our Mission</strong> </h3>
                    <h5 className="mission"> Brainstormers was creacted to educate and refresh
                        the minds of anyone looking to play games that are not only fun, but stimulates your brain.
                         Creating has games that cover Critical Thinking, Memory and More. We keep the games fun and fresh by changing them out 
                         every 3 months. We must keep the <strong> Brain Storming</strong>. 
                    </h5>
                   
</li>
</div>


                </div>
              
            </ul>
           

        </div>
        )
    }
}

export default UserScoreCard
