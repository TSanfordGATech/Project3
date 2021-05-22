import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SignUp extends Component {

  render() {
    return (
      <div>

        <div className="row input-page">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text firstname-signup" type="text" />
                <label>First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text lastname-signup" type="text" />
                <label>Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text email-signup" type="text" />
                <label>Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <textarea id="textarea2 password-signup" className="materialize-textarea"></textarea>
                <label>Password</label>
              </div>
              <div className="signin-buttons">
                <Link to="/brainstormer">
                  <button className="btn waves-effect waves-light sign-btn" type="submit" name="action">Sign Up
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

export default SignUp