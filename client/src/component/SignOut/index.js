import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignOut extends Component {
  componentDidMount() {
    console.log("SignOut mounted");
    const M = window.M;
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }

  render() {
    return (
      <div id="modalsign-out" className="modal">
        <div className="modal-content">
          <h3>"Are you sure you're ready to stop learning?"</h3>
          <Link to="./brainstormer">
            <div className="modal-footer">
              <a href="#!" className="modal-close black waves-black btn-large">
                Yes! I'm sure!
              </a>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignOut;
