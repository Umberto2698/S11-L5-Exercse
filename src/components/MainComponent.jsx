import { Col, Row } from "react-bootstrap";
import TopBarComponent from "./TopBarComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";

const MainComponent = () => {
  const searched = useSelector((state) => state.search.content);
  const dispatch = useDispatch();
  const rockArtist = useSelector((state) => state.rock.content);
  const popArtist = useSelector((state) => state.pop.content);
  const hipHopArtist = useSelector((state) => state.hip_hop.content);
  const [songArray, setSongArray] = useState([]);

  const [rockRandomArtistsArray, setRockRandomArtistsArray] = useState([]);
  const [popRandomArtistsArray, setPopRandomArtistsArray] = useState([]);
  const [hipHopRandomArtistsArray, setHipHopRandomArtistsArray] = useState([]);
  // const [counter, setCounter] = useState(0);

  const rockArtistsDefault = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  const popArtistsDefault = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  const hipHopArtistsDefault = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "efb3c9e7c5msh6491478069abc12p1be504jsnac9d9b8c354d",
  });

  const search = async () => {
    if (searched.length > 2) {
      try {
        const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searched, {
          method: "GET",
          headers,
        });
        if (response.ok) {
          const result = await response.json();
          let songs = result.data;
          setSongArray(songs);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleArtist = async (artistName, num) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        let result = await response.json();
        let songInfo = result.data[0];
        if (num === 1) {
          dispatch({ type: "ROCK", payload: songInfo });
        }
        if (num === 2) {
          dispatch({ type: "POP", payload: songInfo });
        }
        if (num === 3) {
          dispatch({ type: "HIP_HOP", payload: songInfo });
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched]);

  useEffect(() => {
    if (rockRandomArtistsArray.length !== 0) {
      for (let i = 0; i < rockRandomArtistsArray.length; i++) {
        handleArtist(rockRandomArtistsArray[i], 1);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rockRandomArtistsArray]);
  useEffect(() => {
    if (popRandomArtistsArray.length !== 0) {
      for (let i = 0; i < popRandomArtistsArray.length; i++) {
        handleArtist(popRandomArtistsArray[i], 2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popRandomArtistsArray]);
  useEffect(() => {
    if (hipHopRandomArtistsArray.length !== 0) {
      for (let i = 0; i < hipHopRandomArtistsArray.length; i++) {
        handleArtist(hipHopRandomArtistsArray[i], 3);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hipHopRandomArtistsArray]);

  useEffect(() => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      let artist = rockArtistsDefault[Math.floor(Math.random() * rockArtistsDefault.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtistsDefault[Math.floor(Math.random() * popArtistsDefault.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtistsDefault[Math.floor(Math.random() * hipHopArtistsDefault.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
      if (rockRandomArtists.length === 4 && popRandomArtists.length === 4 && hipHopRandomArtists.length === 4) {
        setRockRandomArtistsArray(rockRandomArtists);
        setHipHopRandomArtistsArray(hipHopRandomArtists);
        setPopRandomArtistsArray(popRandomArtists);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <TopBarComponent></TopBarComponent>
      <Row>
        {songArray.length !== 0 && (
          <Col xs={10} id="searchResults">
            <h2 className="text-white display-6 fw-semibold">Search Results</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="py-3 imgLinks">
              {songArray.map((el, i) => (
                <CardComponent songInfo={el} key={i}></CardComponent>
              ))}
            </Row>
          </Col>
        )}
      </Row>
      <Row>
        <Col xs={10}>
          <h2 className="text-white display-6 fw-semibold">Rock Classics</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="rockSection" className="py-3 imgLinks">
            {rockArtist.length === 4 &&
              rockArtist.map((el) => <CardComponent songInfo={el} key={el.id}></CardComponent>)}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <h2 className="text-white display-6 fw-semibold">Pop Culture</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="popSection" className="py-3 imgLinks">
            {popArtist.length === 4 && popArtist.map((el) => <CardComponent songInfo={el} key={el.id}></CardComponent>)}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <h2 className="text-white display-6 fw-semibold">#HipHop</h2>
          <Row xs={1} sm={2} lg={3} xl={4} id="hipHopSection" className="py-3 imgLinks">
            {hipHopArtist.length === 4 &&
              hipHopArtist.map((el) => <CardComponent songInfo={el} key={el.id}></CardComponent>)}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default MainComponent;
