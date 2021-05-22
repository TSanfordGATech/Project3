import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Toasts extends Component {
  test() {
    const options = {
      html: "I am a toast!",
      inDuration: 300,
      outDuration: 375,
      displyLength: 4000,
      classes: "rounded",
      completeCallback: () => {
        console.log("dismissed");
      }
    };
    M.toast(options);
  }

  dismissThem() {
    M.Toast.dismissAll();
  }
  render() {
    return (
      <div>
        <a onClick={this.test} className="btn-toast">
          Toast!
        </a>
        <a onClick={this.dismissThem} className="btn-toast">
          Dismiss All
        </a>
      </div>
    );
  }
}

export default Toasts;
