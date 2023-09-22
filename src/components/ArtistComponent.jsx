import { Button, Col, Row } from "react-bootstrap";
import TopBarComponent from "./TopBarComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AlbumCardComponent from "./AlbumCardComponent";

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

        // displaying the playButton

        // displaying the followButton

        // setting the artist name

        // setting the followers section

        const tracksResponse = await fetch(
          // await the fetch of the artist songs
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
      // ex.: Url is not correct, Internal Server Error
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
        <Col xs={12} md={10} className="mt-5">
          <h2 className="titleMain">{artistObj.name}</h2>
          <div id="followers">{artistObj.nb_fan}</div>
          <div className="d-flex justify-content-center" id="button-container">
            <Button variant="success" className="me-2 mainButton d-none" id="playButton">
              PLAY
            </Button>
            <Button variant="outline-light" className="me-2 mainButton d-none" id="followButton">
              FOLLOW
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={{ span: 10, offset: 1 }} md={10} className="p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white fw-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded">
              {trackArray.length !== 0 &&
                trackArray.map((el) => <AlbumCardComponent songInfo={el}></AlbumCardComponent>)}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ArtistComponent;
