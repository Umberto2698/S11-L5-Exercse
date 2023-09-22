import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Next from "../playerbuttons/Next.png";
import Play from "../playerbuttons/Play.png";
import Previous from "../playerbuttons/Previous.png";
import Repeat from "../playerbuttons/Repeat.png";
import Shuffle from "../playerbuttons/Shuffle.png";
import { useSelector } from "react-redux";
const PlayerComponent = () => {
  const player = useSelector((state) => state.player.content);
  console.log(player);
  return (
    <Container fluid className="pt-1 bg-container position-fixed bottom-0">
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="align-items-center">
            {player.length !== 0 && (
              <Col xs={{ span: 2, offset: 1 }} className="playerControls mt-1">
                <p className="m-0 text-white text-truncate">{player.title_short}</p>
              </Col>
            )}
            <Col
              xs={{ span: 6, offset: 1 }}
              md={{ span: 4, offset: 1 }}
              lg={{ span: 3, offset: 2 }}
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
          <Row className="playBar mt-3 justify-content-center">
            <Col xs={8} md={6} className="d-flex align-items-center justify-content-end">
              {player.length !== 0 && <span className="m-0 text-white"> 0:00</span>}
              <div id="progress" className="mx-2">
                <div className="progress-bar"></div>
              </div>
              {player.length !== 0 && (
                <span className="m-0 text-white">
                  {Math.floor(parseInt(player.duration) / 60)}:
                  {parseInt(player.duration) % 60 < 10
                    ? `0${parseInt(player.duration) % 60}`
                    : `${parseInt(player.duration) % 60}`}
                </span>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
