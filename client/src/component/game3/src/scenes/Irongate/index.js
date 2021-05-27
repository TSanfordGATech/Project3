import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Irongate() {
    return (
        <div className="dung">
            {/* this will be the barrel they can click. Determine what you want to put into it if anything. */}
            <Link to="/Irongate2">
                <button className="irongateimage"></button>
            </Link>
        </div>

    );
}

export default Irongate;

