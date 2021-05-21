import React from "react";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

function Welcome(props) {

    return (
        
        
        <div className="background-login3">
            <header className="welcome3">
                Welcome to the Escape adventure!
            </header>
            <div className="container3">
                <Row>
                    <Col size="lg-8">
                        <p className="intro3"> The year is 2020 and it is almost summer time.... they swore the virus would go away and life would resume normal. You planned a get away vacation with the family...</p>
                        <br></br>
                        <br></br>
                        <p className="until3">but things didn't go as planned....</p>
                    </Col>
                    <Col size="lg-4">
                            <button type="submit" onClick={props.handleSignUpSubmit} className="btn btn-warning">
                                Begin?
                                    </button>
                    </Col>
                </Row>
            </div>
            <div className="animated-background">
                <div className="forest">

                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>

                    <div className="sun"></div>
                    <div className="tree01"></div>
                    <div className="tree02"></div>
                    <div className="tree03"></div>
                    <div className="tree04"></div>

                    <div className="combi-container">
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
