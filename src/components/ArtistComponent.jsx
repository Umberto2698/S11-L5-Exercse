import { Button, Col, Row } from "react-bootstrap";
import TopBarComponent from "./TopBarComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const ArtistComponent = () => {
  const params = useParams();

  const headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "efb3c9e7c5msh6491478069abc12p1be504jsnac9d9b8c354d",
  });

  const [artistObj, setArtistObj] = useState(null);
  const [trackArray, setTrackArray] = useState([]);

  const getArtist = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.artistId, {
        method: "GET",
        headers,
      });

      if (response.ok) {
        const artist = await response.json();
        setArtistObj(artist);

        const tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setTrackArray(tracklist.data);
        }
      } else {
        console.log("error");
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    getArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <TopBarComponent></TopBarComponent>
      <Row>
        {artistObj && (
          <Col xs={12} md={10} className="mt-5">
            <h2 className="titleMain">{artistObj.name}</h2>
            <div id="followers">{artistObj.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button variant="success" className="me-2 mainButton " id="playButton">
                PLAY
              </Button>
              <Button variant="outline-light" className="me-2 mainButton" id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        )}
      </Row>
      <Row className="mb-3">
        <Col xs={{ span: 10, offset: 1 }} md={10} className="p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white fw-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row xs={1} sm={2} lg={3} xl={4}>
              {trackArray.length !== 0 &&
                trackArray.map((el, i) => <CardComponent songInfo={el} key={i}></CardComponent>)}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ArtistComponent;
