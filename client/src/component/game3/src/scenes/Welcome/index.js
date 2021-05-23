import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";
import { Link } from "react-router-dom";


function Welcome(props) {

    return (
        <div className="background-login3">
            <header className="welcome3">
                Welcome to the Escape adventure!
            </header>
            <div className="container" id="cont3">
                <Row>
                    <Col size="lg-8">
                        <p className="intro3"> The year is 2020...... the world and society has taken a turn for the worst. Since vacation options are limited, and rather risky.... you and your family decide to think outside the box and explore other options to get away. Since COVID has struck, you all now work from home and decide to purchase a van and travel the world together. All was going well until the gas crisis.... that was not a real crisis.... hit and you broke down on the side of the road with an empty tank...... </p>
                        <p className="until3">and AAA had no gas to come and get you either. </p>
                        <br></br>
                        <p className="intro3"> Night time came and you all decided to take a doze in the van while you waited to be rescued. While everyone was snoring away - you heard something unusual outside so you ventured out to see what it was.</p>
                        <br></br>
                        <p className="until3">WHAM</p>
                        <br></br>
                        <p className="intro3"> Everything has gone dark..... are you even concious?</p>
                    </Col>
                </Row>
            </div>
            <div className="animated-background" id="animated3">
                <div className="forest3">
                    {/* just the bird and its path with container */}
                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>
                    {/* Moving trees and sun */}
                    <div className="sun"></div>
                    <div className="tree01"></div>
                    <div className="tree02"></div>
                    <div className="tree03"></div>
                    <div className="tree04"></div>
                    {/* This is the bus starting */}
                    <div className="combi-container">
                    <Link to="/">
                    <div className="modal-footer">
                        <button className="modal-close waves-effect btn-small" >ESCAPE!</button>
                    </div>
                </Link>
                        <div className="combi"></div>
                        <div className="wheelshadow"></div>
                        <div className="wheel wheel01" ></div>
                        <div className="wheel wheel02" ></div>
                    </div>
                    {/* <!-- combi-container end --> */}

                </div>
                {/* <!-- forest end --> */}

                <div className="forest-background"></div>
                <div className="road"></div>
            </div>
        </div>
    );
}

export default Welcome
