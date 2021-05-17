import React, { Component } from 'react'
import logo from "../../teamlogo.png"

class UserScoreCard extends Component {

    componentDidMount() {

        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    };

    render() {
        return (
            <div className="score-box">

                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div >
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <h3> YOUR SCORES  </h3>
                            <h5> High Score:</h5>
                            <h5> Last Game Played:</h5>
                            <h5> Highest Level:</h5>

                            <p><strong>Your Learning level:</strong></p>

                            <p><strong>Your highest Scor:e</strong></p>

                            <p><strong>Game Most Frequently Played:</strong></p>

                        </div>



                    </div>
                    </li>
                </ul>


            </div>
        )
    }
}

export default UserScoreCard
