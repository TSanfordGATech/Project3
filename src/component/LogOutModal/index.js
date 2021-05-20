import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class LogOut extends Component {

  componentDidMount() {
    console.log("LogOut mounted")

    const M = window.M;
    // document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    // });
  }
    render() {
      return (
        <div>
          <div id="modal1" class="modal">
            <div class="modal-content">
            <h3>"Are you Super Sure you're ready to stop Learning?"</h3>
            </div>
            <Link to="/">
              <div class="modal-footer">
               <button class="modal-close waves-effect btn-small" >YES SUPER SURE!</button>
              </div>
            </Link>
          </div>
        </div>
      )
    }
  }

  export default LogOut;
