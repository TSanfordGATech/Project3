import React, { Component } from 'react'


class UserScoreCard extends Component {

    componentDidMount() { 

        const M =window.M;
            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                        var instances = M.Sidenav.init(elems, {} );
            });
        };
        
    render() {
        return (
            <div>

                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                        <h3> YOUR HIGH SCORES  </h3>
                        <div class="background">
                            <img src="images/office.jpg" />
                        </div>
                        <h5> High Score:</h5>
                        <h5> Last Game Played:</h5>
                        <h5> Highest Level:</h5>

                        <p><strong>Your Learning level:</strong></p>
                        
                        <p><strong>Your highest Scor:e</strong></p>
                        
                        <p><strong>Game Most Frequently Played:</strong></p>
                        




                    </div>
                    </li>
                </ul>
               

            </div>
        )
    }
}

export default UserScoreCard
