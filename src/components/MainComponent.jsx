import { Col, Row } from "react-bootstrap";
import TopBarComponent from "./TopBarComponent";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlbumCardComponent from "./AlbumCardComponent";

const MainComponent = () => {
  const searched = useSelector((state) => state.search.content);
  const [songArray, setSongArray] = useState([]);
  const [artistobj, setArtistObj] = useState([]);

  const rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "efb3c9e7c5msh6491478069abc12p1be504jsnac9d9b8c354d",
  });

  const search = async () => {
    if (searched.length > 2) {
      try {
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searched, {
          method: "GET",
          headers,
        }); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songs = result.data; // gets the songs info
          setSongArray(songs);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleArtist = async (artistName, i) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers,
      }); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        setArtistObj([songInfo[0], { i }]);
        // create a new album tyle
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searched !== "") {
      search();
    }
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++) {
      handleArtist(rockRandomArtists[j], 1);
    }

    for (let k = 0; k < popRandomArtists.length; k++) {
      handleArtist(popRandomArtists[k], 2);
    }

    for (let l = 0; l < hipHopRandomArtists.length; l++) {
      handleArtist(hipHopRandomArtists[l], 3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <TopBarComponent></TopBarComponent>
      <Row>
        {searched && (
          <Col xs={10} id="searchResults" style={{ display: "none" }}>
            <h2 className="text-white display-6 fw-semibold">Search Results</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="py-3 imgLinks">
              {songArray.map((el) => (
                <AlbumCardComponent songInfo={el}></AlbumCardComponent>
              ))}
            </Row>
          </Col>
        )}
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock"></div>
          <h2 className="text-white display-6 fw-semibold">Rock Classics</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="rockSection" className="py-3 imgLinks">
            {artistobj.length !== 0 && artistobj[1] === 1 && (
              <AlbumCardComponent songInfo={artistobj}></AlbumCardComponent>
            )}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop"></div>
          <h2 className="text-white display-6 fw-semibold">Pop Culture</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="popSection" className="py-3 imgLinks">
            {artistobj.length !== 0 && artistobj[1] === 2 && (
              <AlbumCardComponent songInfo={artistobj}></AlbumCardComponent>
            )}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop"></div>
          <h2 className="text-white display-6 fw-semibold">#HipHop</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="hipHopSection" className="py-3 imgLinks">
            {artistobj.length !== 0 && artistobj[1] === 3 && (
              <AlbumCardComponent songInfo={artistobj}></AlbumCardComponent>
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default MainComponent;
