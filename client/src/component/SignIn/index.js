import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login";

class SignIn extends Component {

  render() {
    return (
      <div>

        <div className="row input-page">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text email-login" type="text" />
                <label>E-mail</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  type="password"
                  id="textarea2 password-login"
                  className="materialize-textarea"
                  name="password"></input>
                <label>Password</label>
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

    );
  }
}

export default SignIn;
