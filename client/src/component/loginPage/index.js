import React, { Component } from 'react';
import SignIn from "../SignIn";
import SignUp from "../SignUp";


class LoginPage extends Component {

    state = { 
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    componentDidMount() {
        const M = window.M;
        // document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        // });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        console.log("Name: " + name);
        console.log("Value: " + value);

        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    signupFormHandler = async (event) => {
        event.preventDefault();

        const { first_name, last_name, email, password } = this.state;
        if (first_name && last_name && email && password) {
            console.log("signing up...");
            const response = await fetch('/api/users', {
                method: 'POST',
                //TODO: why is the below body null? console.log
                body: JSON.stringify({ first_name, last_name, email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response);
            if (response.ok) {
                document.location.replace('/profile');
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
                        <h3 className="login-title">Welcome back Brainstormer</h3>
                        <p className="login-title"></p>
                        <SignIn />

                        <h5 className="login-title" >You are not a Brainstormer? Wow... </h5>
                        <h5 className="login-title1" >Let's get you signed up...</h5>
                        <SignUp 
                        handleInputChange={this.handleInputChange} 
                        handleFormSubmit={this.signupFormHandler}/>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
