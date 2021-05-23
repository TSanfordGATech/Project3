import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {
  function alertLocked(event) {
    event.preventDefault();
    const Swal = require("sweetalert2");
    Swal.fire("make a note for locked desk");
  }
  return ();
}
}

export default Office;
