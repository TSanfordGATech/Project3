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
                <h5 className="card-title3">Of course, it wouldn't be 2020 if there was not some kidnapping to...</h5><br></br>
                <p className="card-text">
                  The killer has knocked you unconscious while you're away from your friends. He drags you through the woods..
                </p>
                <br></br>
                <p className="card-text">
                  You wake up, and you're tied up in the killer's office. He's about to deliver the killing blow, until he hears a noise outside. Lets hope it is your friends or family... but that is unlikely since it is 2020....regardless, this is your chance to escape..
                </p>
                <br></br>
                <p className="card-text">
                  First, you untie yourself.... then you start looking to find a way out. Be mindeful of time - no telling when he will come back.... 
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
