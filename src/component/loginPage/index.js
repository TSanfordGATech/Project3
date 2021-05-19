import React, { Component } from 'react';
import SignIn from "../SignIn";
import SignUp from "../SignUp";


class LoginPage extends Component {
    componentDidMount() {
        const M = window.M;
        // document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        // });


    }
    render() {
        return (
            <div>



                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h3 className="login-title">Welcome Back Brainstormer</h3>
                        <p className="login-title"></p>
                        <SignIn />

                        <h5 className="login-title" >Your Not a Brainstormer? Wow... </h5>
                        <h5 className="login-title1" >Lets get You Signed Up...</h5>
                        <SignUp />
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
