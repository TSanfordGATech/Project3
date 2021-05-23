import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {
  function alertLocked(event) {
    event.preventDefault();
    const Swal = require("sweetalert2");
    Swal.fire("Uh oh! The desk is locked! Try to find the key.");
  }

  return (
    <div
      className="page"
      style={{
        position: "relative",
      }}
    >
      <Route
        render={() =>
          // need to render desk
            <Link
              to="/desk"
              className="desk"
              style={{
                position: "absolute",
                bottom: "150px",
                right: "-12px",
              }}
            ></Link>
        }
      />
    </div>
  );
}

export default Office;
