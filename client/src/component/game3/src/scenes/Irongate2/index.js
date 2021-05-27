import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Irongate2() {
    return (
        <div className="dung">
          <div className="infocard55">
              <Link to="/Run">
                <div className="modal-footer">
                  <button className="modal-close waves-effect btn-small" >unlock!</button>
                </div>
              </Link>
          </div>
        </div>
      );
    }

export default Irongate2;

