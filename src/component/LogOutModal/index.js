import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class LogOut extends Component {

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
          <div id="modal1" class="modal">
            <div class="modal-content">
            <h3>"Are you sure your Super Sure your ready to stop learning"</h3>
            </div>
            <Link to="/">
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </Link>
          </div>
        </div>
      )
    }
  }

  export default LogOut
