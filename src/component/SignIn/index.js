import React, { Component } from 'react';
import { Link } from "react-router-dom";




class SignIn extends Component {

    render() {
        return (
            <div>
               
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="text" />
            <label for="input_text">UserName</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <textarea id="textarea2" className="materialize-textarea"></textarea>
            <label for="textarea2">Password</label>
          </div>
          <div className="signin-buttons">
          <Link to="/brainstormer">     
  <button className="btn waves-effect waves-light sign-btn" type="submit" name="action">Sign In
    <i className="left"></i>
  </button>
  </Link>
  </div>
        </div>
      </form>
    </div>
           
            </div>
        )
    }
}

export default SignIn
