import React, { Component } from 'react';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
class LoginPage extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    
        
    }



    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>


                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h3>Welcome Back Brainstormer</h3>

                    <SignIn/>

                        <h5>If you havent joined the team yet Lets Get you signed up!</h5>
                        <SignUp/>
                        </div>
                        <div classNameName="modal-footer">
                            <a href="#!" classNameName="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LoginPage
