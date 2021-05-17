import React from "react";
import { Link } from "react-router-dom";
import UserScoreCard from "../../component/UserScoreCard";
import LogOut from "../../component/LogOutModal";
import logo from "../../teamlogo.png"
function SignedInHeader() {

  return (
    <div>
      <div className="callout">
        <div className="home">
          <div className="header2">
            <div className="jumbotron box.box">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="header3">
              <h1 className="header3">Welcome Back Brainstormer!</h1>
              <Link to="/brainstormer">
                <a className=" waves-dark btn modal-trigger" href="#modal1">Bye-Bye</a>
              </Link>

              <a data-target="slide-out" className=" btn sidenav-trigger score">Your Scores</a>
              <LogOut />
              </div>
            </div>

          </div>
        </div>
      </div>
      <UserScoreCard />
    </div>



  )


}


export default SignedInHeader;