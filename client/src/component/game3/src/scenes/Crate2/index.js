import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Crate2(props) {

  return (
    <div className="dung">
      <div className="info-card2">
          <Link to="/door">
            <div className="modal-footer">
              <button className="modal-close waves-effect btn-small" >Return!</button>
            </div>
          </Link>
      </div>
    </div>
  );
}

export default Crate2;
