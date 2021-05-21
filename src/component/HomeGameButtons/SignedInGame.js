import React from 'react'
//  import red from "../../Capture.PNG";
import { Link } from "react-router-dom";


const SignedInGameB = () => {
  return (
     <div className="containe">
        <div className="contain5">
       <div className="boxes">

       <div className="boxq"> 
      <div className="box-flex"> 
  <div className="row">
  <div className="col s6 m12">
    <div className="card grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Memory Games</span>
        <p className="card-info">A classic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
       </div>
      <Link to="/match-the-cards">   
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
  </div>
</div>
   <div className="boxq"> 
     <div className="box-flex">
     <div className="col s6 m12">
       <div className="card grey darken-1  center">
         <div className="card-content white-text">
           <span className="card-title">Typing & Reading Speed</span>
           <p className="card-info">This game is a typing game that helps with hand eye coordination as well as typing speed. When the asteroids appear, type the words that they have written on them to save the earth!</p>
         </div> 
         <Link to="/asteroid-type">  
         <div className="card-action">
         <a className=" waves-dark btn-small" ><i className="material-icons right">beach_access</i>Lets Play</a> 
         </div>
         </Link> 
       </div>
     </div>
     </div>
   </div>
   </div>
   </div>
   
 
   <div>
   <div className="boxq"> 
   <div className="box-flex">
  <div className="row">
  <div className="col s6 m12">
    <div className="card grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Critical Thinking</span>
        <p className="card-info">A classic card-matching game that tests your memory and sharpens your focus. Earn a 1 to 3-star rating based on how many moves you use. See how fast you can find all eight pairs!</p>
      </div>
      <Link to="/escape-room">  
      <div className="card-action">
      <a className=" waves-dark btn-small"><i className="material-icons right">beach_access</i>Lets Play</a> 
      </div>
      </Link> 
    </div>
  </div>
  </div>
</div>
</div> 
   </div>
   </div>
   </div>

  )
}

export default SignedInGameB;

