import React from "react";
import { Link } from "react-router-dom";
import UserScoreCard from "../../component/UserScoreCard";
import LogOut from "../../component/LogOutModal";
import logo from "../../teamlogo.png"
import Typed from "react-typed"
function SignedInHeader() {

  return (
    <div>
      <div className="callout">
        <div className="callout24">
          <div className="header2">
            <div className="jumbotron">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="headerz">
              <div className="header8">
              <h1>Welcome Back Brainstormer!</h1>
              </div>
              <div className="header-buttons">
              <Link to="/brainstormer">
                <a className=" waves-dark btn modal-trigger" href="#modal1">Bye-Bye</a>
              </Link>

              <a data-target="slide-out" className=" btn sidenav-trigger score">ABOUT</a>
              <LogOut />
              </div>
              </div>
            </div>
            <div>
            <Typed
                        className="typed-text"
                        strings={["Voted 1# Learning Hub", "Fun Games for All ages", "Critical Thinking Skills", "Game that keeps Giving"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    /></div>
          </div>
      </div>
      </div>
      <UserScoreCard />
    </div>



  )


}


export default SignedInHeader;