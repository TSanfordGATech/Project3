import React, { Component } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

class LoginPage extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  componentDidMount() {
    const M = window.M;
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  signupFormHandler = async (event) => {
    event.preventDefault();

    const { first_name, last_name, email, password } = this.state;

    if (first_name && last_name && email && password) {
      console.log("signing up...");
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Successfully signed up!");
        // document.location.replace('/brainstormers');
      } else {
        alert(response.statusText);
      }
    }
  };

  render() {
    return (
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h3 className="login-title-1">Welcome back Brainstormer</h3>
            <p className="login-title"></p>
            <SignIn />

            <h5 className="login-title-2">You are not a Brainstormer? Wow... </h5>
            <h5 className="login-title1 login-title-3">Let's get you signed up...</h5>
            <SignUp
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.signupFormHandler}
            />
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
