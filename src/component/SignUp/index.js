import React, { Component } from 'react'



class SignUp extends Component {

    render() {
        return (
            <div>
               
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="text" />
            <label for="input_text">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="text" />
            <label for="input_text">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="text" />
            <label for="input_text">Email</label>
          </div>
        </div>
        
        <div className="row">
          <div className="input-field col s6">
            <textarea id="textarea2" className="materialize-textarea"></textarea>
            <label for="textarea2">Password</label>
          </div>
        </div>
      </form>
    </div>
           
            </div>
        )
    }
}

export default SignUp
