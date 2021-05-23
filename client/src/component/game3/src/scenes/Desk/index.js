import React from "react";
import "./style.css";

function Desk() {
  return (
    <div
      className="deskPage"
      style={{
        position: "relative",
      }}
    >
      <div className="tableTop">
        <div className="deskTitle">
          Take a close look at the items on the desk!
        </div>
        <div
          className="calendar"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "204px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Desk;
