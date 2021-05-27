import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Run() {
  return (
    <div className="run">
      <div className="infocard66">
          <Link to="/">
            <div className="modal-footer">
              <button className="modal-close waves-effect btn-small" >RUN!</button>
            </div>
          </Link>
      </div>
    </div>
  );
}

export default Run;

