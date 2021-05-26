import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./../loginPage/index";

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
               
                
              />
              <label for="input_text">First Name</label>
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
              <label for="input_text">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input 
                id="input_text email-signup" 
                type="text" 
                name="email"
                onChange={handleInputChange} />
              <label for="input_text">Email</label>
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
              <label for="textarea2">Password</label>
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