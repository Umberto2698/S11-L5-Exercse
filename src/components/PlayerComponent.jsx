import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Next from "../playerbuttons/Next.png";
import Play from "../playerbuttons/Play.png";
import Previous from "../playerbuttons/Previous.png";
import Repeat from "../playerbuttons/Repeat.png";
import Shuffle from "../playerbuttons/Shuffle.png";
const PlayerComponent = () => {
  return (
    <Container fluid className="pt-1 bg-container position-fixed bottom-0">
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 2, offset: 5 }}
              className="playerControls mt-1"
            >
              <Row className="justify-content-between align-items-center flex-nowrap">
                <Link id="player-btn" className="w-auto" to="/">
                  <img src={Shuffle} alt="shuffle" />
                </Link>
                <Link id="player-btn" className="w-auto" to="/">
                  <img src={Previous} alt="previous" />
                </Link>
                <Link id="player-btn" className="w-auto" to="/">
                  <img src={Play} alt="play" />
                </Link>
                <Link id="player-btn" className="w-auto" to="/">
                  <img src={Next} alt="next" />
                </Link>
                <Link id="player-btn" className="w-auto" to="/">
                  <img src={Repeat} alt="repeat" />
                </Link>
              </Row>
            </Col>
          </Row>
          <Row className="playBar py-3 justify-content-center">
            <Col xs={8} md={6}>
              <div id="progress">
                <div className="progress-bar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
