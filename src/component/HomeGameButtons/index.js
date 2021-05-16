import React from 'react'
//  import red from "../../Capture.PNG";
import { Link } from "react-router-dom";
const Buttons = () => {
    return (
        <div>
  <div className="row">
  <div className="col s6 m4">
    <div className="card grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Memory Games</span>
  
        <p>A classic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
  
      </div>
      <Link to="/match-the-cards">   
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
</div>
     
     <div className="row">
     <div className="col s6 m4">
       <div className="card grey darken-1">
         <div className="card-content white-text">
           <span className="card-title">Typing & Reading Speed</span>
           <p>This game is a typing game that helps with hand eye coordination as well as typing speed.  Asteroids threaten to impact earth and youre the last line of defense.  When the asteroids appear, type the words that they have written on them to save the earth!</p>
         </div>
         <Link to="/asteroid-type">  
         <div className="card-action">
         <a className=" waves-dark btn-small" ><i className="material-icons right">beach_access</i>Lets Play</a> 
         </div>
         </Link> 
       </div>
     </div>
   </div>
   
  <div className="row">
  <div className="col s6 m4">
    <div className="card grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Critical Thinking</span>
        <p>A classNameic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
      </div>
      <Link to="/escape-room">  
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
</div>
     
     <div className="row">
     <div className="col s6 m4">
       <div className="card grey darken-1">
         <div className="card-content white-text">
           <span className="card-title">Easy Entertainment</span>
           <p>A classic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
         </div>
         <Link to="/card-game">  
         <div className="card-action">
         <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
         </div>
         </Link> 
       </div>
     </div>
   </div>
   </div>
        )
}

export default Buttons;

