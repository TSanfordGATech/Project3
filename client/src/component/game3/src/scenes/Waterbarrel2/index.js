import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Waterbarrel2() {

    return (
        <div className="dung">
          <div className="infocard44">
              <Link to="/Wbarrel">
                <div className="modal-footer">
                  <button className="modal-close waves-effect btn-small" >Return!</button>
                </div>
              </Link>
          </div>
        </div>
      );
    }


export default Waterbarrel2;
