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
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <Link to="./brainstormer">
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
