import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
    }
  }

  const progress = Math.floor((count/3)*100) +"%"

  return (
    <div className="background-startpage">
      <Row>
        <Col size="md-8">
            <div className="info-card">
              <div className="card-body">
                <h5 className="card-title3">It wouldn't be 2020 if there was not some kidnapping... sorry it happened to you..</h5><br></br>
                <p className="card-text">
                  The killer has knocked you unconscious and drug you back to his dungeon. 
                </p>
                <br></br>
                <p className="card-text">
                  You wake up to find your feet and hands tied up. He's about to deliver the killing blow, until he hears a noise outside. Lets hope it is your family... but that is unlikely since it is 2020....regardless, this is your chance to escape..
                </p>
                <br></br>
                <p className="card-text">
                  First, you untie yourself and immediatly run to the gate where you can see some light but you find the lock. Start hunting for the key! Be mindeful of time - no telling when he will come back.... 
                </p>
                <br></br>
                <p className="card-text">
                  What are you waiting for? ESCAPE! 
                </p>
                <div className="startBtn">
                    <Link
                        to="/office"
                        style={{ textDecoration: 'none' }}
                    >
                      <div className="start">
                      {progress > 0+"%" ? "RESUME" : "START GAME"}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
        </Col>
      </Row>
      <div className="night-background">
                <div className="forest-start">
                    <div className="moon"></div>
                </div>
{/* <!-- forest end --> */}
                <div className="forest-background-start"></div>
                <div className="road"></div>
            </div> 
    </div>
  );
}

export default StartPage;
