import React from "react";
// (document).foundation();
import HomeGameButton from "../HomeGameButtons";
import ScoreCard from "../../component/ScoreCard"
import red from "../../Capture.PNG"

function Header() {

  return (
    <div>
    <div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron">
            <h1>Brainstormers</h1>
            {/* <div className= "tag"><p>A shelter where </p>
               <p>critical thinking Brews</p></div>
             */}
            <button data-target="modal1" class="btn modal-trigger">Sign In</button>
            <a  data-target="slide-out" class=" btn sidenav-trigger">Scores</a>
            <div className="z-depth-5" id="sign-in" data-reveal>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div>
       <div className="body" > 

  <HomeGameButton />
  <ScoreCard/>
</div>
</div>
</div>

  )


}


/* <h2>SIGN IN</h2>
<h5>UserName</h5>
<input className="user-name-input"></input>
<h5>Passowd</h5>
<input className="user-name-input"></input>
<button class="close-button" data-close aria-label="Close modal" type="button">
  <span aria-hidden="true">&times;</span>
</button> */

export default Header;