import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Compass(props) {

    return (
        <div className="dung">
          <div className="info-card3">
              <Link to="/Waterbarrel">
                <div className="modal-footer">
                  <button className="modal-close waves-effect btn-small" >Return!</button>
                </div>
              </Link>
          </div>
        </div>
      );
    }
    
export default Compass;

