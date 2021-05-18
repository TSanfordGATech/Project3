import React, { Component } from 'react'
import logo from "../../teamlogo.png"

class ScoreCard extends Component {

    componentDidMount() { 
        console.log("ScoreCard mounted")
        const M =window.M;
            // document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                        var instances = M.Sidenav.init(elems, {} );
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
                        <h3>  SCORES  </h3>
                        <h5> High Score:</h5>
                        <h5> Last Game Played:</h5>
                        <h5> Highest Level:</h5>
  </li>
</div>


                    </div>
                  
                </ul>
               

            </div>
        )
    }
}

export default ScoreCard
