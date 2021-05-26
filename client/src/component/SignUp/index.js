import React from "react";
import { Link } from "react-router-dom";

function SignUp({ handleInputChange, handleFormSubmit }) {
  return (
    <div>
      <div className="row input-page">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="input_text firstname-signup"
                type="text"
                name="first_name"
                onChange={handleInputChange}
              />
              <label>First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="input_text lastname-signup"
                type="text"
                name="last_name"
                onChange={handleInputChange}
              />
              <label>Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input 
                id="input_text email-signup" 
                type="text" 
                name="email"
                onChange={handleInputChange} />
              <label>Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="textarea2 password-signup"
                className="materialize-textarea"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
              <label>Password</label>
            </div>
            <div className="signin-buttons">
              <Link to="/brainstormer">
                <button
                  className="btn waves-effect waves-light sign-btn"
                  type="submit"
                  name="action"
                  onClick={handleFormSubmit}
                >
                  Sign Up
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

export default SignUp;