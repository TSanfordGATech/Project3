import React from "react";
// (document).foundation();
// import HomeGameButton from "../HomeGameButtons";
import ScoreCard from "../../component/ScoreCard"
import logo from "../../teamlogo.png"

function Header() {

  return (
    <div>
    <div className="callout">
      <div className="home">
        <div className="header">
          <div className="jumbotron box.box">
            <img className="logo" src={logo} alt="Logo"/>
            <h1 className="title">"We are Brainstorming Here</h1>
            <h3 className="title2"> And Quite a Storm it is"</h3>
            {/* <div className= "tag"><p>A shelter where </p>
               <p>critical thinking Brews</p></div>
             */}
            <button data-target="modal1" className="btn modal-trigger sign">Sign In</button>
            <a  data-target="slide-out" className=" btn sidenav-trigger btn score">Scores</a>
            <div className="z-depth-5 " id="sign-in" data-reveal>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div>
       <div className="body" > 

  
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