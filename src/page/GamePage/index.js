import React from 'react'
import SignOut from "../../component/SignOut"
const GamePage = () => {
    return (
        <div>
            <div className="callout header">
            <h1>Brainstormers</h1> 
            <a className=" black waves-light btn modal-trigger" href="#modal1">Log Out</a>
<SignOut/>
            </div>
<div>
     
<div className="row">
     <div className="col s12 m12">
       <div className="card black darken-1">
         <div className="card-content white-text">
           <span className="card-title">Choosen Game</span>
           <p>This game is a typing game that helps with hand eye coordination as well as typing speed.  Asteroids threaten to impact earth and youre the last line of defense.  When the asteroids appear, type the words that they have written on them to save the earth!</p>
         </div>
         <div className="card-action">
         <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
         </div>
       </div>
     </div>
   </div>
</div>
        </div>
    )
}

export default GamePage
