import React, { Component } from 'react'


class ScoreCard extends Component {

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
                        <h3> HIGH SCORES  </h3>
                        <div class="background">
                            <img src="images/office.jpg" />
                        </div>
                        <h5> High Score:</h5>
                        <h5> Last Game Played:</h5>
                        <h5> Highest Level:</h5>




                    </div>
                    </li>
                </ul>
               

            </div>
        )
    }
}

export default ScoreCard
